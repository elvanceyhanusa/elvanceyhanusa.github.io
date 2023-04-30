import React from "react";
import PropTypes from "prop-types";

const EditorialItem = ({ data }) => (
  <article className="interest-container">
    <li className="editorial">
      <span className="title">{data.title}</span>
      <span className="name"> {data.name}</span>
      <span className="duration"> {data.duration}</span>
    </li>
  </article>
);

EditorialItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default EditorialItem;
