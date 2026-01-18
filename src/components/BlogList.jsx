import './BlogList.css';

function BlogList() {
  const posts = [
    { date: '14 Dec 2025', title: '2025 Year in Review' },
    { date: '23 Nov 2025', title: 'Product Evals in Three Simple Steps' },
    { date: '19 Oct 2025', title: 'Advice for New Principal Tech ICs (i.e., Notes to Myself)' },
    { date: '14 Sep 2025', title: 'Training an LLM-RecSys Hybrid for Steerable Recs with Semantic IDs' },
    { date: '22 Jun 2025', title: 'Evaluating Long-Context Question & Answer Systems' },
    { date: '04 Jun 2025', title: 'AI Engineer 2025 - Improving RecSys & Search with LLM techniques' },
    { date: '18 May 2025', title: 'Exceptional Leadership: Some Qualities, Behaviors, and Styles' },
    { date: '04 May 2025', title: 'Building News Agents for Daily News Recaps with MCP, Q, and tmux' },
    { date: '20 Apr 2025', title: 'An LLM-as-Judge Won\'t Save The Product—Fixing Your Process Will' },
    { date: '30 Mar 2025', title: 'Frequently Asked Questions about My Writing Process' },
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
