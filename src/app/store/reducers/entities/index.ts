import { combineReducers } from 'redux';
import { companyReducer } from './company.reducer';
import { contactReducer } from './contact.reducer';
import { driverReducer } from './driver.reducer';

export interface IEntitiesState {
  companies: Array<any>;
  contacts: Array<any>;
  drivers: Array<any>;
}

export const entitiesReducer = combineReducers({
  companies: companyReducer,
  contacts: contactReducer,
  drivers: driverReducer
});
