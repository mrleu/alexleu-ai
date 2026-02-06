const posts = import.meta.glob('../posts/*.md', { eager: true, query: '?url', import: 'default' });

export const getPostRoutes = () => {
  return Object.keys(posts).map(path => {
    const slug = path.replace('../posts/', '').replace('.md', '');
    return { slug, path: `/articles/${slug}` };
  });
};

export const getPostSlugs = () => {
  return Object.keys(posts).map(path => 
    path.replace('../posts/', '').replace('.md', '')
  );
};
