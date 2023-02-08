/* eslint-disable react-hooks/rules-of-hooks */
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
const CREATE_BLOG = gql`
  mutation AddBlog($content: String!, $sender: String!) {
    addBlog(content: $content, sender: $sender) {
      content
      sender
    }
  }
`;

const CreateBlog = () => {
  const [create_blog, { data, loading, error }] = useMutation(CREATE_BLOG);
  const [content, setContent] = useState("");
  const [sender, setSender] = useState("");
  console.log({ loading, error, data });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          create_blog({ variables: { content, sender } });
          setContent("");
          setSender("");
        }}
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
