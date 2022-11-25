async function getPosts() {
	const allPosts = import.meta.glob('./blog/[slug]/content/*.md', { eager: false });

	let posts = {};
	for (let path in allPosts) {
		const contents = await allPosts[path]();
		posts[path] = contents;
	}

	return posts;
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const posts = getPosts();
	const slug = params.slug ? './content/' + params.slug + '.md' : null;

	return { posts: posts, slug: slug };
}
