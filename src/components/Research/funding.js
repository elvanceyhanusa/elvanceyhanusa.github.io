import React from "react";
import PropTypes from "prop-types";

import FundingItem from "./Funding/fundingItem";

const Funding = ({ data }) => (
  <div className="funding">
    <div className="link-to" id="funding" />
    <div className="title">
      <h3>Fundings</h3>
    </div>
    <ol>
      {data.map((funding) => (
        <FundingItem data={funding} key={funding.title} />
      ))}
    </ol>
  </div>
);

Funding.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sub_title: PropTypes.string,
    })
  ),
};

Funding.defaultProps = {
  data: [],
};

export default Funding;
