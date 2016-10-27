import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge(newState, action.pokemon);
    default:
      return state;
  }
};

export default PokemonReducer;
