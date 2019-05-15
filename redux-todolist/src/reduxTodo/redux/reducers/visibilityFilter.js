import {SET_FILTER} from '../actions/todoActions.js';
import { VISIBILITY_FILTERS } from "../../constant";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
