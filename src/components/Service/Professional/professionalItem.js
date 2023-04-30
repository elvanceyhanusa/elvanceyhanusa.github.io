import React from "react";
import PropTypes from "prop-types";

const ProfessionalItem = ({ data }) => (
  <article className="interest-container">
    <li className="professional">
      <span className="title">{data.title}</span>
      <span className="name"> {data.name}</span>
      <span className="duration"> {data.duration}</span>
    </li>
  </article>
);

ProfessionalItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default ProfessionalItem;
