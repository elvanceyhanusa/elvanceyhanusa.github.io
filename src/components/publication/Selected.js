import React from "react";
import PropTypes from "prop-types";

import SelectedItem from "./Selected/selectedItem";
import { FileText } from "react-feather";

const Selected = ({ data }) => (
  <div className="selected">
    <div className="link-to" id="selected" />
    <div className="title">
      <h2>
        <span className="mr-2">
          <FileText color="red" size={16} />
        </span>
        <span> Selected Publication</span>
      </h2>
    </div>
    <ol reversed>
      {data.map((selected) => (
        <SelectedItem data={selected} key={selected.title} />
      ))}
    </ol>
  </div>
);

Selected.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sub_title: PropTypes.string,
    })
  ),
};

Selected.defaultProps = {
  data: [],
};

export default Selected;
