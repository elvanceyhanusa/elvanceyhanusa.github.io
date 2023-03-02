import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Star, Slack, Download } from "react-feather";

export const picon = {
  0: "red",
  1: "blue",
  2: "green",
};

function showLink(dlink) {
  if (dlink) {
    return (
      <Link to={{ pathname: dlink.link }} target="_blank">
        <Download color="green" size={16} />
      </Link>
    );
  }
}

const PaperItem = ({ data }) => (
  <article className="publication-container">
    <li className="paper">
      <span className="level">
        <Slack color={picon[data.level]} size={16} />
      </span>
      <span className="ptitle">{data.title}</span>
      <span className="link">
        {showLink(data.link)}
        {/* <Link to={{ pathname: data.link }} target="_blank">
          <Download size={16} />
        </Link> */}
      </span>
    </li>
  </article>
);

PaperItem.propTypes = {
  data: PropTypes.shape({
    level: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default PaperItem;
