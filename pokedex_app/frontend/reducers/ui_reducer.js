import {RECEIVE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';


const uiReducer = (state={pokeDisplay: null, errors: [], loading: []}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_POKEMON:
      newState = merge({}, state);
      newState.pokeDisplay = action.pokeItems.pokemon.id;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
