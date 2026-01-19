import './BlogList.css';

function BlogList() {
  const posts = [
    { date: '14 Dec 2025', title: '2025 Year in Review' },
  ];

  return (
    <section className="blog-list">
      <div className="blog-list-content">
        <h2>Latest</h2>
        <ul className="posts">
          {posts.map((post, index) => (
            <li key={index} className="post-item">
              <span className="post-date">{post.date}</span>
              <span className="post-separator">·</span>
              <a href={`#post-${index}`} className="post-title">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogList;
