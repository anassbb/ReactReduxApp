import * as type from "./ActionType";
export function createCourse(course) {
  return { type: type.CREAT_COURSE, course };
}
