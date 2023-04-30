import React from "react";
import PropTypes from "prop-types";

const RefereeingItem = ({ data }) => (
  <article className="interest-container">
    <li className="refereeing">
      <span className="title"> {data.title}</span>

      <span className="date"> {data.date}</span>
      <span className={data.type}> {data.type}</span>
    </li>
  </article>
);

RefereeingItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default RefereeingItem;
