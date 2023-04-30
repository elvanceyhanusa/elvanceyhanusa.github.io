import React from "react";
import PropTypes from "prop-types";

import StudentItem from "./Student/studentItem";

const Student = ({ data }) => (
  <div className="student">
    <div className="link-to" id="student" />
    <div className="title">
      <h3>Students</h3>
    </div>
    <ol>
      {data.map((student) => (
        <StudentItem data={student} key={student.name + student.duration} />
      ))}
    </ol>
  </div>
);

Student.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      duration: PropTypes.string,
      status: PropTypes.string,
      comment: PropTypes.string,
    })
  ),
};

Student.defaultProps = {
  data: [],
};

export default Student;
