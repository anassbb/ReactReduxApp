import * as authorApi from "../../api/authorApi";
import * as type from "./ActionType";
import { beginApiCall } from "./ApiStatusActions";

export function loadAuthorSuccess(authors) {
  return { type: type.LOAD_AUTHOR_SUCCES, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
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
