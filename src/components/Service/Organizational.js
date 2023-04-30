import React from "react";
import PropTypes from "prop-types";

import OrganizationalItem from "./Organizational/organizationalItem";

const Organizational = ({ data }) => (
  <div className="organizational">
    <div className="link-to" id="organizational" />
    <div className="title">
      <h3>Organizational Activities</h3>
    </div>
    <ul>
      {data.map((organizational) => (
        <OrganizationalItem data={organizational} key={organizational.name + organizational.title} />
      ))}
    </ul>
  </div>
);

Organizational.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      duration: PropTypes.string,
    })
  ),
};

Organizational.defaultProps = {
  data: [],
};

export default Organizational;
