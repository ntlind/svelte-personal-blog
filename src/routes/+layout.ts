/** @type {import('./$types').PageLoad} */
export function load({ params }:any) {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }

 }