import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../Redux/Actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    // this.props.action.
    debugger;
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading course field" + error);
    });
  }
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
  actions: PropTypes.object.isRequired,
};

function mapStatToProps({ courses }) {
  return {
    courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch),
  };
}

export default connect(mapStatToProps, mapDispatchToProps)(CoursesPage);
