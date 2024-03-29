import React from "react";
import PropTypes from "prop-types";

const HonorItem = ({ data }) => (
  <article className="interest-container">
    <li className="honor">{data.title}</li>
  </article>
);

HonorItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default HonorItem;
