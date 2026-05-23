export function getPostPath(post: { id: string, data: { categories?: any, category?: string } }) {
  const slug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.[^/.]+$/, '');

  let category = 'uncategorized';
  if (Array.isArray(post.data.categories) && post.data.categories.length > 0) {
    category = post.data.categories[0];
  } else if (typeof post.data.categories === 'string') {
    category = post.data.categories;
  } else if (post.data.category) {
    category = post.data.category;
  }

  return `/blog/${category}/${slug}`;
}
