---
title: The no-nonsense guide to anomaly detection
image: /images/blog_posts/anomaly_detection/background.webp
date: September, 13 2022
description: "Automatically flag trends and outliers in time-series data"
image_alt_text: Light texture background, by Luca Bravo on Unsplash
featured: 1
---

## What is anomaly detection?

Anomaly detection (also known as outlier detection) is a set of statistical techniques used to automatically flag unusual datapoints within large datasets. There are dozens of algorithms you can use to filter for anomalies, but the end goal is the same: to identify blips or trends in your data that may signal an important change or event. Anomaly detection systems scale much more efficienctly than relying on humans and dashboards, so they're frequently used when dealing with prohibitively large datasets.

## Why do we care?

There are many reasons why we might perform anomaly detection:

- **Event Monitoring**: By alerting us to major changes in a variable of interest, anomaly detection can help us preempt important events, such as a surge in retail sales or an impending mechanical failure. Equity traders, for example, rely on anomaly detection algorithms to spot hot stocks or upcoming sell-offs when conducting [technical analyses](https://www.investopedia.com/terms/t/technicalanalysis.asp).
- **Data Pre-Processing**: Anomaly detection can help us spot and correct data errors before they cause problems in downstream systems. Anomaly detection systems are frequently employed at the end of complicated data pipelines, for example, to double-check that all of the upstream datasets were joined correctly.
- **Causal Exploration**: Finally, anomaly detection can help us identify and explore unusual datapoints to understand underlying systems. Retailers, for example, frequently use anomaly detection to explore pricing differences between stores to understand when, where, and why prices deviate from regional standards.

## How do we spot anomalies?

"Anomaly detection" refers to a broad set of statistical techniques that can be split further into four distinct use cases:

#### Case #1: Point Anomalies

In the simplest case, we may want to filter a distribution of datapoints to see if any observations cross a pre-set threshold. This type of detection is easily visualized as a histogram, where we're looking for bars that are unusually high or low relative to the other bars:

![Anomaly histogram example](/images/blog_posts/anomaly_detection/case1.webp)

To algorithmically identify these outliers, we simply set some threshold (usually measured in standard deviations away from the mean) and highlight any observations that lie above or below that threshold. A few common ways to set these thresholds include:

- **Deviations from the mean**: Measure how many standard errors (`standard_error = standard_deviation / sqrt(n)`) lie between each observation in your sample and the sample's mean (`number_of_standard_errors = (x - sample_mean) / standard_error`), then filter for any observations that lies 2 or 3 standard errors outside of the mean. Choosing two standard errors will flag the ~5% most extreme outliers, while choosing three standard errors will flag the ~.3% most extreme outliers. This method is probably the best bang for your buck in 99% of real-world use cases, but assumes that your underlying data is normally distributed and/or relatively large (per the [Central Limit Theorem](https://en.wikipedia.org/wiki/Central_limit_theorem)).
- **Bootstrapping**: When dealing with small (n < ~100), non-normally distributed datasets, you may want to bootstrap the 95% or 99% confidence intervals after estimating your distribution using a parametric curve. This is trickier to do than it is to write, so most people will stick with thresholds representing deviations from the mean.
- **Expert knowledge**: If you already have a good idea what an "anomaly" looks like, you can manually set your thresholds without relying on statistics.

#### Case #2: Contextual Anomalies

Anomalies are defined a bit differently when dealing with data that varies consistently over space (e.g., spatial data) or over time (a.k.a., seasonal time series data). Setting a simple standard deviation threshold won't produce interesting results because the definition for "normal" varies by place or timestep. As an easy example, consider the difference in retail turkey sales from one month to the next in the US. Selling 1,000 turkeys per day would be an extreme anomaly for most of the year, but might be a relatively common occurence during the month of November as people stock-up for Thanksgiving.

![Contextual anomaly example](/images/blog_posts/anomaly_detection/case2.webp)

When searching for contextual anomalies, we first calculate a reasonable predictive interval for each place or timestep, then flag any outliers that fall outside of that predictive interval's boundaries. Most supervised machine learning algorithms are capable of producing predictive intervals, and there is [no way to tell which model will perform best before you test them out](https://en.wikipedia.org/wiki/No_free_lunch_theorem). We prefer to use LightGBM's quantile regressor or Facebook's Prophet library for their speed and proven accuracy, but SVMs, random forests, or even quantile regression can also be used. To see how we might build time series predictive intervals using Prophet, check out our open-source [`anomaly-detection` library](https://github.com/ntlind/anomaly-detection).

#### Case #3: Trend Anomalies (a.k.a., Collective Anomalies)

Sometimes we want to move beyond point estimates to identify anomalous trends that don't exist in our historical data. The points themselves may fall within reasonable confidence boundaries, but the slope of those points over time may differ drastically from our expectations.

![Trend anomaly example](/images/blog_posts/anomaly_detection/case3.webp)

To identify these trend shifts, we need to deconstruct our time series into seasonal and trend components, then flag changes in our underlying trend using vertical intercepts called "changepoints". By flagging changepoints in our data, we can spot broad changes in our underlying timeseries even when the point estimates themselves seem reasonable. We often rely on Facebook's Prophet library to identify trend anomalies because of the way it deconstructs seasonal and trend components, but other signal processing alternatives include:

- Exponential, weighted, or simple moving averages and their crossovers (commonly used in trading)
- [SEATS decomposition](https://otexts.com/fpp2/seats.html)
- [Seasonal and Trend decomposition using Loess (STL)](https://otexts.com/fpp2/stl.html)
- Innovation state space models (ISSMs)
- Generative models fit using PyMC3, which can automatically test different changepoints

Our open-source [`anomaly-detection` library](https://github.com/ntlind/anomaly-detection) plots Prophet's changepoints as dashed vertical lines to make them easy to spot.

![Example graph from anomaly-detection](/images/blog_posts/anomaly_detection/example_graph.webp)

#### Case #4: Multinomial Anomalies

Finally, we may be interested in identifying anomalies within groups of related datapoints without focusing on any one particular feature. Say, for example, that we're interested in spotting the best student in a large, diverse graduating class. GPA alone won't be enough to differentiate our top scholar, so we'd have to look at dozens of other variables (e.g., extracurricular success, time spent volunteering, leadership positions, etc.) to identify our breakout star.

![Anomaly cluster examples](/images/blog_posts/anomaly_detection/case4.webp)

To automatically identify segments within multidimensional groups, we can use a branch of machine learning called unsupervised learning to reduce the dimensionality of our data and group similar observations. Once grouped, we can measure the distance between groups to understand how anomalous each group is relative to the whole dataset. Any unsupervised algorithm can be used for this type of analysis, including:

- Autoencoders (e.g., neural networks used for dimensionality reduction)
- Density-Based Spatial Clustering of Applications with Noise (DBSCAN)
- t-Stochastic Neighbor Embedding (t-SNE)
- Principle Components Analysis (PCA)
- Hierarchical clustering
- k-Nearest Neighbor (kNN)

There is no single "best algorithm", so we generally recommend trying a few and picking the one with the best [Davies-Bouldin Index score](https://iopscience.iop.org/article/10.1088/1742-6596/1235/1/012015/pdf). We generally recommend t-SNE for modeling non-linear relationships in large datasets as it usually performs well and runs quickly.

## Questions?

If this write-up was helpful or you have additional questions, we'd love to continue the conversation at [hello@quantile.app](mailto:hello@quantile.app).
