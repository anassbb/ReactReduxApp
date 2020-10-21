import * as type from "../Actions/ActionType";
import initialState from "./initialState";

function actionTypeEndsInSuccess(types) {
  return types.substring(types.length - 7) === "_SUCCES";
}

export default function ApiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == type.BEGIN_API_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
