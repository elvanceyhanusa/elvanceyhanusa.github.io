import React from "react";
import PropTypes from "prop-types";

const Degree = ({ data }) => (
  <article className="degree-container">
    <li className="degree">
      {data.degree}
      <p className="school">
        <a href={data.link}>{data.school}</a>, {data.year}
      </p>
    </li>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
