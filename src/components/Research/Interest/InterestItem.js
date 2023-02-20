import React from "react";
import PropTypes from "prop-types";

const InterestItem = ({ data }) => (
  <article className="interest-container">
    <header>
      <h4 className="interest">{data.title}</h4>
      <p className="sub_title">
        <div>{data.sub_title}</div>
      </p>
    </header>
  </article>
);

InterestItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default InterestItem;
