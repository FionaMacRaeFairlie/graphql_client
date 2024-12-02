import { useQuery, gql, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { Blog } from "./blog";

const GET_BLOGS = gql`
  query GetAllBlogs {
    getBlogs {
      id
      content
      author
    }
  }
`;

const UPDATE_BLOGS_SUBSCRIPTION = gql`
  subscription BlogStream {
    newBlog {
      content
      id
      author
    }
  }
`;

const Home = function () {
  const [blogs, setBlogs] = useState([]);
  const { loading, error, data } = useQuery(GET_BLOGS);

  // setting subscription
  const { loading_ws, error_ws, data_ws } = useSubscription(
    UPDATE_BLOGS_SUBSCRIPTION,
    {
      onData: (data_ws) => {   
        if (data_ws.data.data.newBlog.author) {
          setBlogs([...blogs,data_ws.data.data.newBlog]);
        }
      },
    }
  );

  // setting up trigger for data change
  useEffect(() => {
    console.log({ data });
    if (data?.getBlogs?.length > 0) {
      setBlogs(data.getBlogs);
    }
  }, [data]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return blogs.map(({ id, content, author }) => (
    <>
      <Blog content={content} author={author} id={id} key={id}/>
    </>
  ));
};

export default Home;
