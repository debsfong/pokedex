import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchAllPokemon, fetchPokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon, receivePokemon, requestPokemon} from './actions/pokemon_actions';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded",() => {
  const store = configureStore();
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
  window.store = store;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  window.fetchPokemon = fetchPokemon;
  window.receivePokemon = receivePokemon;
  window.requestPokemon = requestPokemon;
});
