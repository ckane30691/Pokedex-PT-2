import * as APIUtil from '../util/api_util';
import {receiveItems} from './item_actions';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = pokeItems => ({
  type: RECEIVE_POKEMON,
  pokeItems: pokeItems
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemon = (pokemonId) => (dispatch) => {
  APIUtil.fetchPokemon(pokemonId)
    .then(pokeItems => dispatch(receivePokemon(pokeItems)));
  // APIUtil.fetchPokemon(pokemonId)
  //   .then(pokemonHash => dispatch(receiveItems(pokemonHash.items)));
};
