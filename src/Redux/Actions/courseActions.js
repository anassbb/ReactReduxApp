import * as type from "./ActionType";
import * as courseApi from "../../api/courseApi";

export function loadCourseSuccess(Courses) {
  return { type: type.LOAD_COURSES_SUCCES, Courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((Courses) => {
        dispatch(loadCourseSuccess(Courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
export function createCourseSuccess(course) {
  return { type: type.ADD_COURSE_SUCCES, course };
}

export function updateCourseSuccess(course) {
  return { type: type.UPDATE_COURSE_SUCCES, course };
}
export function saveCourses(course) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
