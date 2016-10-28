import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const defaultState = {
  attack: "",
  defense: "",
  id: "",
  image_url: "",
  moves: [],
  items: []
};

const PokemonDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.poke;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
