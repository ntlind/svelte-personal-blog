async function getPosts() {
	const allPosts = import.meta.glob('./blog/[slug]/content/*.md', { eager: false });

	let posts = {};
	for (let path in allPosts) {
		var filename = path.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, '');
		const contents = await allPosts[path]();
		posts[filename] = contents;
	}

	return posts;
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const posts = getPosts();
	const slug = params.slug;

	return { posts: posts, slug: slug };
}
