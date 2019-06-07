import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CourseActionTypes, CourseRequested, CourseLoaded, AllCoursesRequested, AllCoursesLoaded } from './course.action';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { CoursesService } from './services/courses.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { allCoursesLoaded } from './course.selector';

@Injectable()
export class CourseEffects {
  @Effect() loadCourse$ = this.actions$.pipe(
    ofType<CourseRequested>(CourseActionTypes.CourseRequested),
    mergeMap(({ payload }) => this.coursesService.findCourseById(payload)),
    map(course => new CourseLoaded(course))
  );

  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
      filter(([action, areAllCoursesLoaded]) => !areAllCoursesLoaded),
      mergeMap(action => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoaded(courses))
    );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {}
}
