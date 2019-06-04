import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CourseActionTypes, CourseRequested, CourseLoaded } from './course.action';
import { mergeMap, map } from 'rxjs/operators';
import { CoursesService } from './services/courses.service';

@Injectable()
export class CourseEffects {
  @Effect() loadCourse$ = this.actions$.pipe(
    ofType<CourseRequested>(CourseActionTypes.CourseRequested),
    mergeMap(({ payload }) => this.coursesService.findCourseById(payload)),
    map(course => new CourseLoaded(course))
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
