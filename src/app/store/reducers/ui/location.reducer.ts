import { CompanyActions, CompanyLocationActions } from '../actions';
import { createReducer } from '../create-reducer';
import { Contact } from '../models';
import { mergeLists, deleteItem } from '../normalizerUtils';

export interface ICompanyLocationState {
  selected: string;
  isLoading: boolean;
}
const INITIAL_STATE: ICompanyLocationState = { selected: null, isLoading: false };

export const companyLocationReducer = createReducer(INITIAL_STATE, {
  [CompanyLocationActions.ADD_LOCATION_CONTACT_REQUEST](state, action) {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  [CompanyLocationActions.ADD_LOCATION_CONTACT_SUCCESS](state, action) {
    return Object.assign({}, state,
      {
        selected: action.prevId = state.selected ? action.data.result : state.selected,
        isLoading: false
     });
  },
  [CompanyLocationActions.SELECT_LOCATION_CONTACT](state, action) {
    return Object.assign({}, state, { selected: action.data.result, isLoading: false });
  },
  [CompanyLocationActions.UPDATE_LOCATION_CONTACT_REQUEST](state, action) {
    return Object.assign({}, state,
      {
        isLoading: true
      });
  },
  [CompanyLocationActions.UPDATE_LOCATION_CONTACT_SUCCESS](state, action) {
    return Object.assign({}, state,
      {
        isLoading: false
      });
  },
});
