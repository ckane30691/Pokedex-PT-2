// import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions';
// import merge from 'lodash/merge';
//
// const pokemonReducer = (state={}, action) => {
//   let newState;
//
//   switch (action.type) {
//     case RECEIVE_ALL_POKEMON:
//       newState = merge({}, action.pokemon);
//       return newState;
//     // case RECEIVE_POKEMON:
//     //   newState = action.currentPokemon;
//     //   return newState;
//     default:
//       return state;
//   }
// };


// export default pokemonReducer;

import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';
import {combineReducers} from 'redux';

const allPokemonReducer = (state={}, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, action.pokemon);
      return newState;
      case RECEIVE_POKEMON:
      newState = merge({}, state);
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default allPokemonReducer;
