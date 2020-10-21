import { combineReducers } from "redux";
import courses from "../Reducer/CourseReducer";
import authors from "../Reducer/AuthorReducer";
import apiCallsInProgress from "../Reducer/ApiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
