import { combineReducers } from "redux";
import courses from "../Reducer/CourseReducer";
import authors from "../Reducer/AuthorReducer";

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
