export const Blog = ({ content, author, id }) => {
  return (
    
    <div key={id} className="card" style={{ width: "75rem" }}>
      <div className="card-header">A post from {author}</div>
      <div className="card-body">
      <p className="card-text">{id}</p>
      <p className="card-text">{content}</p>
      </div>
    </div>
  );
};
