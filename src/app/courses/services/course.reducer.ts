import { Course } from '../model/course';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface CourseState extends EntityState<Course> {
  // coursesEntities: { [key: number]: Course };
  // coursesOrder: number[];
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();
