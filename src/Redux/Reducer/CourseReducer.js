import * as type from "../Actions/ActionType";
export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case type.CREAT_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
