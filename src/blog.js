export const Blog = ({ content, sender, id }) => {
  return (
    <div key={id} style={{ border: "1px solid black" }}>
      <h3>{content}</h3>
      <br />
      <b>Blog Writer:</b>
      <p>{sender}</p>
      <br />
    </div>
  );
};
