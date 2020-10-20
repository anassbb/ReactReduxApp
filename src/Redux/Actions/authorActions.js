import * as authorApi from "../../api/authorApi";
import * as type from "./ActionType";

export function loadAuthorSuccess(authors) {
  return { type: type.LOAD_AUTHOR_SUCCES, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
