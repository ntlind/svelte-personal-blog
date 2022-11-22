async function getPosts() {
	const allPosts = import.meta.glob('./content/*.md', { eager: false });

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
	const slug = './content/' + params.slug + '.md';

	return { posts: posts, slug: slug };
}
