import { Course } from '../model/course';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CourseActions, CourseActionTypes } from '../course.action';

export interface CoursesState extends EntityState<Course> {
  // coursesEntities: { [key: number]: Course };
  // coursesOrder: number[];
  allCoursesLoaded: boolean;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialCoursesState: CoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export function coursesReducer(state = initialCoursesState, { payload, type }): CoursesState {
  switch (type) {
    case CourseActionTypes.CourseLoaded:
      return adapter.addOne(payload, state);
    case CourseActionTypes.AllCoursesLoaded:
      return adapter.addAll(payload, { ...state, allCoursesLoaded: true });
    case CourseActionTypes.CourseSaved:
      return adapter.upsertOne(payload, state);
    default:
      return state;
  }
}

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
