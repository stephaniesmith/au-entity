import { Course } from '../model/course';

export interface CourseState {
  coursesEntities: { [key: number]: Course };
  coursesOrder: number[];
}
