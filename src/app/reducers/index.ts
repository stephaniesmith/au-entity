import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {User} from '../model/user.model';
import {AuthActions, AuthActionTypes} from '../auth/auth.actions';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';
import { coursesReducer } from '../courses/services/course.reducer';


export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  courses: coursesReducer
};





export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
