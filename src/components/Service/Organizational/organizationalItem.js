import React from "react";
import PropTypes from "prop-types";

const OrganizationalItem = ({ data }) => (
  <article className="interest-container">
    <li className="organizational">
      <span className="name"> {data.name}</span>
      <span className="title"> {data.title}</span>

      <span className="duration"> {data.duration}</span>
    </li>
  </article>
);

OrganizationalItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default OrganizationalItem;
