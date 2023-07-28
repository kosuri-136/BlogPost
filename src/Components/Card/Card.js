import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
const cardStyle = () => {
  return {
    width: "18rem",
    padding: "20px",
    backgroundColor: "SKYBLUE",
    margin: "15px",
    borderRadius: "25px",
  };
};

const Card = ({ name, id }) => {
  return (
    <div style={cardStyle()}>
      <div className="card-body text-center">
        <h5 className="card-title text-dark">
          <i className="fa fa-user-circle-o"></i> {name}
        </h5>
        <Link
          className="btn-sm btn-primary text-white font-weight-bold"
          to={`/authors/${id}`}
          id={id}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
export default Card;
