import { useQuery, gql, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { Blog } from "./blog";

const GET_BLOGS = gql`
  query GetAllBlogs {
    getBlogs {
      id
      title
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
      title
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
<<<<<<< HEAD
      onData: (data_ws) => {  
        
        if (data_ws?.data?.data?.newBlog?.author) {

          setBlogs([...blogs,data_ws.data.data.newBlog]);

=======
      onData: (data_ws) => {   
        if (data_ws.data.data.newBlog.author) {
          setBlogs([...blogs,data_ws.data.data.newBlog]);
>>>>>>> ae1bd4cdfda05e127bb4e9be77b8302e454e75c9
        }
      },
    }
  );

  // setting up trigger for data change
  useEffect(() => {
    console.log("in effect",{ data });
    if (data?.getBlogs?.length > 0) {
      setBlogs(data.getBlogs);
    }
  }, [data]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

return(
  <div className="row">
     <div className="col-2"></div>
  <div className="col-6">
    <h2>Guestbook</h2>
  { blogs.map(({ id,title, content, author }) => (
    <>
      <Blog title={title} content={content} author={author} id={id} />
    </>
  ))}
  </div>
  <div className="col-4"></div>
  </div>
)

};

export default Home;
