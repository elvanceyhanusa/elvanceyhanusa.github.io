import React from "react";
import PropTypes from "prop-types";

import ProfessionalItem from "./Professional/professionalItem";

const Professional = ({ data }) => (
  <div className="professional">
    <div className="link-to" id="professional" />
    <div className="title">
      <h3>Professional Service</h3>
    </div>
    <ul>
      {data.map((professional) => (
        <ProfessionalItem data={professional} key={professional.title + professional.duration} />
      ))}
    </ul>
  </div>
);

Professional.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      duration: PropTypes.string,
    })
  ),
};

Professional.defaultProps = {
  data: [],
};

export default Professional;
