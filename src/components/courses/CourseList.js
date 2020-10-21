import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses, onClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-primary"
                href={"https://www.pluralsight.com/courses/" + course.slug}
              >
                watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={onClick}
                value={course.id}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default CourseList;
