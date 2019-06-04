import { Action } from '@ngrx/store';
import { Course } from './model/course';

export enum CourseActionTypes {
  CourseRequested = '[View Course Page] Course Requested',
  CourseLoaded = '[Course API] Course Loaded',
}

export class CourseRequested implements Action {
  readonly type = CourseActionTypes.CourseRequested;

  constructor(public payload: number) {}
}

export class CourseLoaded implements Action {
  readonly type = CourseActionTypes.CourseLoaded;

  constructor(public payload: Course) {}
}

export type CourseActions = CourseRequested | CourseLoaded;
