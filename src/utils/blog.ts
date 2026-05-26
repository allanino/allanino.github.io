const DATE_PREFIX_REGEX = /^\d{4}-\d{2}-\d{2}-/;
const EXTENSION_REGEX = /\.[^/.]+$/;

export function getPostPath(post: { id: string }) {
  const slug = post.id.replace(DATE_PREFIX_REGEX, '').replace(EXTENSION_REGEX, '');

  return `/blog/${slug}`;
}
