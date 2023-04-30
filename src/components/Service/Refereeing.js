import React from "react";
import PropTypes from "prop-types";

import RefereeingItem from "./Refereeing/refereeingItem";

const Refereeing = ({ data }) => (
  <div className="refereeing">
    <div className="link-to" id="refereeing" />
    <div className="title">
      <h3>Refereeing Activities</h3>
    </div>
    <ul>
      {data.map((refereeing) => (
        <RefereeingItem data={refereeing} key={refereeing.title + refereeing.date} />
      ))}
    </ul>
  </div>
);

Refereeing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

Refereeing.defaultProps = {
  data: [],
};

export default Refereeing;
