import {ADD_TODO, TOGGLE_TODO} from '../actions/todoActions.js';
const initialState = {
  allIds: [],
  byIds: {}
}

export default function(state=initialState,action){

  switch (action.type) {
    case ADD_TODO:{

      const {id, content} = action.payload;
      return {
        ...state,
        allIds:[...state.allIds,id],
        byIds: {
          ...state.byIds,
          [id]:{
            content,
            complete: false,
            id: id
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const tmp_id = action.payload.id

      return {
        ...state,
        byIds: {

          ...state.byIds,
          [tmp_id]:{
              ...state.byIds[tmp_id],
              complete: !state.byIds[tmp_id].complete
          }
        }
      };
    }

    default:
      return state
  }
}
