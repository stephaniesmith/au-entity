import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './services/course.reducer';
import * as fromCourse from './services/course.reducer';

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectCourseById = (courseId: number) => createSelector(
  selectCoursesState,
  ({ entities }) => entities[courseId]
);

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourse.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(({ category }) => category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(({ category }) => category === 'ADVANCED')
);

export const selectPromoCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(({ promo }) => promo).length
);
