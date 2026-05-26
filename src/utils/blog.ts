const DATE_PREFIX_REGEX = /^\d{4}-\d{2}-\d{2}-/;
const FILE_EXT_REGEX = /\.[^/.]+$/;

export function getPostPath(post: { id: string }) {
  const slug = post.id.replace(DATE_PREFIX_REGEX, '').replace(FILE_EXT_REGEX, '');

  let category = 'uncategorized';
  if (post.data) {
    if (Array.isArray(post.data.categories) && post.data.categories.length > 0) {
      category = post.data.categories[0];
    } else if (typeof post.data.categories === 'string') {
      category = post.data.categories;
    } else if (post.data.category) {
      category = post.data.category;
    }
  }

  return `/blog/${category}/${slug}`;
}
