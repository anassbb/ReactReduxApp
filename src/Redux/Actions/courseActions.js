import * as type from "./ActionType";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: type.CREAT_COURSE, course };
}

export function loadCourseSuccess(Courses) {
  debugger;
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
