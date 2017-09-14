import { RECEIVE_ITEMS } from '../actions/item_actions';

const itemsReducer = (state={}, action) => {

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;
