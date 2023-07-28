import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  const getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      background: "#f4f4f4",
    };
  };

  const LikeStyle = () => {
    return {
      background: "#F8D7DA",
      color: "#000000",
      border: "none",
      float: "right",
      padding: "5px 9px",
      fontColor: "white",
    };
  };

  const dateStyle = () => {
    return {
      background: "#CCE5FF",
      color: "000000",
      border: "none",
      float: "right",
      padding: "5px 9px",
      fontColor: "white",
      marginRight: "7rem",
    };
  };
  
  return (
    <div className="container">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            style={getStyle()}
            className="border border-primary rounded m-3"
          >
            <Link to={`/posts/${post.id}`}>
              <h5 className="text-dark">
                <span>{post.title}</span>
                <span style={LikeStyle()}>Likes {post.numLikes}</span>
                <span style={dateStyle()}>
                  {new Date(post.datePublished).toDateString()}
                </span>
              </h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
