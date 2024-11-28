/* eslint-disable react-hooks/rules-of-hooks */
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
const CREATE_BLOG = gql`
  mutation Mutation($content: String!, $author: String!) {
    addNewBlog(content: $content, author: $author) {
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
  console.log({ data });

  return (
    <div className="row">
      
      <div className="col-4">
      <form
        className="form-group"
        onSubmit={(e) => {
          e.preventDefault();
          create_blog({ variables: { content, author } });
          setContent("");
          setAuthor("");
        }}
      >
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
      <div className="col-8"></div>
      </div>
    </div>
  );
};

export default CreateBlog;
