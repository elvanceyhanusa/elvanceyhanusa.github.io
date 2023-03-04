import React from "react";
import PropTypes from "prop-types";

import MiscItem from "./Misc/miscItem";

import { FileText } from "react-feather";
import { Slack } from "react-feather";

const Misc = ({ data }) => (
  <div className="misc">
    <div className="link-to" id="misc" />
    <div className="title">
      <h2>
        <span className="mr-2">
          <FileText color="red" size={16} />
        </span>
        <span> Misc Publication</span>
      </h2>
    </div>

    <ul>
      {data.map((misc) => (
        <MiscItem data={misc} key={misc.title} />
      ))}
    </ul>
  </div>
);

Misc.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.array,
    })
  ),
};

Misc.defaultProps = {
  data: [],
};

export default Misc;
