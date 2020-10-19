import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../Redux/Actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  action: PropTypes.object.isRequired,
};

function mapStatToProps({ courses }) {
  return {
    courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(courseAction, dispatch),
  };
}

export default connect(mapStatToProps, mapDispatchToProps)(CoursesPage);
