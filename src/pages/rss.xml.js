import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPostPath } from '../utils/blog';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Allan Costa',
    description: 'Mathematics, Programming, and Philosophy',
    site: context.site || 'https://allancosta.github.io',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: getPostPath(post),
    })),
  });
}
