import React from "react";
import PropTypes from "prop-types";

const HonorItem = ({ data }) => (
  <article className="interest-container">
    <header>
      <li className="honor">{data.title}</li>
      <div className="sub_title">
        <p>{data.sub_title}</p>
      </div>
    </header>
  </article>
);

HonorItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default HonorItem;
