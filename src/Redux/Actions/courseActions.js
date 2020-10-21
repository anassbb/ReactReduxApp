import * as type from "./ActionType";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from "./ApiStatusActions";

export function loadCourseSuccess(Courses) {
  return { type: type.LOAD_COURSES_SUCCES, Courses };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
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

export function deleteCourseSuccess(id) {
  return { type: type.DELETE_COURSE_SUCCES, id };
}

export function saveCourses(course) {
  return function (dispatch, getState) {
    dispatch(beginApiCall);
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

export function deleteCourse(id) {
  return function (dispatch, getState) {
    dispatch(beginApiCall);
    return courseApi
      .deleteCourse(id)
      .then(() => {
        dispatch(deleteCourseSuccess(id));
      })
      .catch((error) => {
        throw error;
      });
  };
}
