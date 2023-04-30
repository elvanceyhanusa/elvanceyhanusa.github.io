import React from "react";
import PropTypes from "prop-types";

const StudentItem = ({ data }) => (
  <article className="interest-container">
    <li className="student">
      <span className="title">{data.title}</span>
      <span className="name"> {data.name}</span>
      <span className="duration"> {data.duration}</span>
      {data.status === "Graduated" ? (
        <span className="graduated"> {data.status}</span>
      ) : (
        <span className="current"> {data.status}</span>
      )}
      <span className="comment"> {data.comment}</span>
    </li>
  </article>
);

StudentItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.string,
    status: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};

export default StudentItem;
