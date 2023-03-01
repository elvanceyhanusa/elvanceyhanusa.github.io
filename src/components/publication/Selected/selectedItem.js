import React from "react";
import PropTypes from "prop-types";

const SelectedItem = ({ data }) => (
  <article className="publication-container">
    <li className="selected">{data.title}</li>
  </article>
);

SelectedItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SelectedItem;
