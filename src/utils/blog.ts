export function getPostPath(post: { id: string }) {
  const slug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.[^/.]+$/, '');

  return `/blog/${slug}`;
}
