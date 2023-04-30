import React from "react";
import PropTypes from "prop-types";

const MembershipItem = ({ data }) => (
  <article className="interest-container">
    <li className="membership">
      <span className="title">{data.title}</span>
      <span className="date"> {data.date}</span>
    </li>
  </article>
);

MembershipItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default MembershipItem;
