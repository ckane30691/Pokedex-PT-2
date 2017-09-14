// import { RECEIVE_ITEMS } from '../actions/item_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state={}, action) => {

  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokeItems.items;
    default:
      return state;
  }
};

export default itemsReducer;
