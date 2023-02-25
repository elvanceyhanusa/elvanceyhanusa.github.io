import React from "react";
import PropTypes from "prop-types";

import HonorItem from "./Honor/honorItem";

const Honor = ({ data }) => (
  <div className="honor">
    <div className="link-to" id="honor" />
    <div className="title">
      <h3>Honor and Awards</h3>
    </div>
    <ul>
      {data.map((honor) => (
        <HonorItem data={honor} key={honor.title} />
      ))}
    </ul>
  </div>
);

Honor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sub_title: PropTypes.string,
    })
  ),
};

Honor.defaultProps = {
  data: [],
};

export default Honor;
