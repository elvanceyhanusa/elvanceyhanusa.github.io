import React from "react";
import PropTypes from "prop-types";

import MembershipItem from "./Membership/membershipItem";

const Membership = ({ data }) => (
  <div className="membership">
    <div className="link-to" id="membership" />
    <div className="title">
      <h3>Professional Membership</h3>
    </div>
    <ul>
      {data.map((membership) => (
        <MembershipItem data={membership} key={membership.title + membership.date} />
      ))}
    </ul>
  </div>
);

Membership.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};

Membership.defaultProps = {
  data: [],
};

export default Membership;
