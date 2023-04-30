import React from "react";
import PropTypes from "prop-types";

import EditorialItem from "./Editorial/editorialItem";

const Editorial = ({ data }) => (
  <div className="editorial">
    <div className="link-to" id="editorial" />
    <div className="title">
      <h3>Editorial Activities</h3>
    </div>
    <ul>
      {data.map((editorial) => (
        <EditorialItem data={editorial} key={editorial.name + editorial.title} />
      ))}
    </ul>
  </div>
);

Editorial.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      duration: PropTypes.string,
    })
  ),
};

Editorial.defaultProps = {
  data: [],
};

export default Editorial;
