import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './services/course.reducer';

export const selectCoursesState = createFeatureSelector<CourseState>('courses');

export const selectCourseById = (courseId: number) => createSelector(
  selectCoursesState,
  ({ entities }) => entities[courseId]
);
