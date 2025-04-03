/* eslint-disable react-hooks/rules-of-hooks */
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
const CREATE_BLOG = gql`
  mutation Mutation($title: String!, $content: String!, $author: String!) {
    addNewBlog(title: $title, content: $content, author: $author) {
      title
      content
      author
      id
    }
  }
`;

const CreateBlog = () => {
  const [create_blog, { data, loading, error }] = useMutation(CREATE_BLOG);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
<<<<<<< HEAD
  const [title, setTitle] = useState("");
=======
  // console.log({ data });
>>>>>>> ae1bd4cdfda05e127bb4e9be77b8302e454e75c9

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-6">
        <h1>Add a guestbook entry here</h1>
        <form
          className="form-group"
          onSubmit={(e) => {
            e.preventDefault();
            create_blog({ variables: { title,content, author } });
            setTitle("");
            setContent("");
            setAuthor("");
          }}
        >
          <label> Add title here</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label> Add a new post here</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label> and the author name here</label>
          <input
            className="form-control"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add Post
          </button>
        </form>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default CreateBlog;
