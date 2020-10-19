import { combineReducers } from "redux";
import courses from "../Reducer/CourseReducer";

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
