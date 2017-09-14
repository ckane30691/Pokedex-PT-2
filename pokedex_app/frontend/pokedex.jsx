import React from 'react';
import ReactDOM from 'react-dom';
// import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
// import * as APIUtil from './util/api_util';
import configureStore from './store/store';
// import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
// import { HashRouter, Route } from 'react-router-dom';

// window.fetchAllPokemon = APIUtil.fetchAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // // testing
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});
