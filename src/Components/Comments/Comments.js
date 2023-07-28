import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Comments = ({ comments }) => {
  return (
    <div className="container text-white">
      <h4 className="text-white mb-4 mt-4 text-center">Comments</h4>
      {comments.map((comment) => {
        return (
          <li className="media alert alert-primary" key={comment.id}>
            <div>
              <Link to={`/authors/${comment.authorId}`}>
                <h5>
                  {" "}
                  <i className="fa fa-user-circle-o text-danger"> Author</i>
                </h5>
                <br></br>
              </Link>
              <div className="media-body">
                <label className="font-italic font-weight-bold">
                  Comment :
                </label>
                <span className="ml-3 text-dark">{comment.text}</span>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Comments;
