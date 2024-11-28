export const Blog = ({ content, author, id }) => {
  return (
    
    <div key={id} className="card" style={{ width: "75rem" }}>
      <div class="card-header">A post from {author}</div>
      <div className="card-body">
        <p class="card-text">{content}</p>
      </div>
    </div>
  );
};
