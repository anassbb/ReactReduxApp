import * as type from "../Actions/ActionType";

export default function AuthorReducer(state = [], action) {
  switch (action.type) {
    case type.LOAD_AUTHOR_SUCCES:
      return action.authors;
    default:
      return state;
  }
}
