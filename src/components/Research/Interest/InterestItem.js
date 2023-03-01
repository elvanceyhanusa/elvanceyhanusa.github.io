import React from "react";
import PropTypes from "prop-types";

const InterestItem = ({ data }) => (
  <article className="interest-container">
    <li className="interest">
      {data.title}
      <div className="sub_title">{data.sub_title}</div>
    </li>
  </article>
);

InterestItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default InterestItem;
