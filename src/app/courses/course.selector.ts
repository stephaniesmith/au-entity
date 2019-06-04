import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './services/course.reducer';

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectCourseById = (courseId: number) => createSelector(
  selectCoursesState,
  ({ entities }) => entities[courseId]
);
