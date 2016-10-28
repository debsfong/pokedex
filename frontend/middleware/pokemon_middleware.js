import {fetchAllPokemon, fetchPokemon, createPokemon} from '../util/api_util';
import {
  REQUEST_ALL_POKEMON, receiveAllPokemon,
  REQUEST_POKEMON, receivePokemon,
  CREATE_NEW_POKEMON, receiveNewPokemon
} from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonSuccess = data => dispatch(receivePokemon(data));
  const receiveNewPokemonSuccess = data => dispatch(receiveNewPokemon(data));

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.id, receivePokemonSuccess);
      return next(action);
    case CREATE_NEW_POKEMON:
      createPokemon(action.poke, receiveNewPokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
