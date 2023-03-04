import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Star, Slack, Download } from "react-feather";

const MiscItem = ({ data }) => (
  <article className="publication-container">
    <li className="misc">
      <span className="title">{data.title}</span>
      <ol reversed>
        {data.data.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ol>
    </li>
  </article>
);

MiscItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }).isRequired,
};

export default MiscItem;
