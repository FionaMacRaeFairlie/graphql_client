export const Blog = ({ title,content, author, id }) => {
  return (
    
    <div key={id} className="card" style={{ width: "75rem" }}>
<<<<<<< HEAD
      <div className="card-header"> <h3>{title} </h3></div>
      <div className="card-body">
        <p className="card-text">{content}</p>
        <div className ="card-footer text-muted"> A post from {author}</div>
=======
      <div className="card-header">A post from {author}</div>
      <div className="card-body">
      <p className="card-text">{id}</p>
      <p className="card-text">{content}</p>
>>>>>>> ae1bd4cdfda05e127bb4e9be77b8302e454e75c9
      </div>
    </div>
  );
};
