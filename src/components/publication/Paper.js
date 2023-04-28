import React from "react";
import PropTypes from "prop-types";

import PaperItem, { picon } from "./Paper/paperItem";

import { FileText, Slack } from "react-feather";

const Paper = ({ data }) => (
  <div className="paper">
    <div className="link-to" id="paper" />
    <div className="title">
      <h2>
        <span className="mr-2">
          <FileText color="red" size={16} />
        </span>
        <span> Paper Publication</span>
      </h2>
    </div>
    <div>
      <ul>
        <li>
          <Slack color={picon[0]} size={16} /> : Articles Published in Probability, Statistics, and Mathematical
          Journals
        </li>
        <li>
          <Slack color={picon[1]} size={16} /> : Methodology Articles in Medical, Imaging and Other Areas
        </li>
        <li>
          <Slack color={picon[2]} size={16} /> : Application Articles Published in Medical, Imaging, and Other Area
          Journals
        </li>
      </ul>
    </div>
    <ol reversed>
      {data.map((paper) => (
        <PaperItem data={paper} key={paper.title} />
      ))}
    </ol>
  </div>
);

Paper.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number,
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

Paper.defaultProps = {
  data: [],
};

export default Paper;
