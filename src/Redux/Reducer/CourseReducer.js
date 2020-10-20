import * as type from "../Actions/ActionType";
export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case type.ADD_COURSE_SUCCES:
      return [...state, { ...action.course }];
    case type.UPDATE_COURSE_SUCCES:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case type.LOAD_COURSES_SUCCES:
      return action.Courses;
    default:
      return state;
  }
}
