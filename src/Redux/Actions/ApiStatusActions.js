import * as type from "./ActionType";

export function beginApiCall() {
  return { type: type.BEGIN_API_CALL };
}
