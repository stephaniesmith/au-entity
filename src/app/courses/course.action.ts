import { Action } from '@ngrx/store';
import { Course } from './model/course';
import { Update } from '@ngrx/entity';

export enum CourseActionTypes {
  CourseRequested = '[View Course Page] Course Requested',
  CourseLoaded = '[Course API] Course Loaded',
  AllCoursesRequested = '[Courses Home Page] All Courses Requested',
  AllCoursesLoaded = '[Courses API] All Courses Loaded',
  CourseSaved = '[Edit Course Dialog] Course Saved'
}

export class CourseRequested implements Action {
  readonly type = CourseActionTypes.CourseRequested;

  constructor(public payload: number) {}
}

export class CourseLoaded implements Action {
  readonly type = CourseActionTypes.CourseLoaded;

  constructor(public payload: Course) {}
}

export class AllCoursesRequested implements Action {
  readonly type = CourseActionTypes.AllCoursesRequested;
}

export class AllCoursesLoaded implements Action {
  readonly type = CourseActionTypes.AllCoursesLoaded;

  constructor(public payload: Course[]) {}
}

export class CourseSaved implements Action {
  readonly type = CourseActionTypes.CourseSaved;

  constructor(public payload: Update<Course>) {}
}

export type CourseActions =
  CourseRequested |
  CourseLoaded |
  AllCoursesRequested |
  AllCoursesLoaded |
  CourseSaved;
