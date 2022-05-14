import coursesTemp from "../courses.json";
import { matchColorByCourse } from "../utils/utils";

const courses = coursesTemp.map((course) => ({
  ...course,
  color: matchColorByCourse(course),
}));

export const getCourses = () => courses;

export const getCourseById = (id) =>
  courses.filter((course) => course.id === id)[0];
