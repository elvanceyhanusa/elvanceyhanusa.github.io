import React from "react";
import PropTypes from "prop-types";

const FundingItem = ({ data }) => (
  <article className="interest-container">
    <li className="funding">
      <span className="org">{data.org}</span>
      <span className="title"> {data.title}</span>
      <span className="amount"> {data.amount}</span>
      <span className="duration"> {data.duration}</span>
    </li>
  </article>
);

FundingItem.propTypes = {
  data: PropTypes.shape({
    org: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default FundingItem;
