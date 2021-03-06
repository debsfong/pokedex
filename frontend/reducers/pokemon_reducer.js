import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge(newState, action.pokemon);
    case RECEIVE_NEW_POKEMON:
      return merge(newState, action.poke);
    default:
      return state;
  }
};

export default PokemonReducer;
