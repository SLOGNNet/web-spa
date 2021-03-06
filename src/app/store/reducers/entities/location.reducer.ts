import { CommonActions } from '../actions';
import { createReducer } from '../create-reducer';
import { Location } from '../models';
import { mergeEntities } from './utils';
const INITIAL_STATE = [];

export const locationReducer = createReducer(INITIAL_STATE, {

  [CommonActions.DEFAULT](state, action) {
    return mergeEntities(state, action, 'locations');
  }
});
