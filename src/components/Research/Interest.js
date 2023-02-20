import React from "react";
import PropTypes from "prop-types";

import InterestItem from "./Interest/InterestItem";

const Interest = ({ data }) => (
  <div className="interest">
    <div className="link-to" id="interest" />
    <div className="title">
      <h3>Interest</h3>
    </div>
    {data.map((interest) => (
      <InterestItem data={interest} key={interest.title} />
    ))}
  </div>
);

Interest.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sub_title: PropTypes.string,
    })
  ),
};

Interest.defaultProps = {
  data: [],
};

export default Interest;
