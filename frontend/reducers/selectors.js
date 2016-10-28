import { values } from 'lodash';

export const selectAllPokemon = ({ pokemon }) => (
  values(pokemon)
);

export const selectPokemonItem = ( { poke }, id ) => {
  let foundItem = {};
  poke.items.forEach (item => {
    if (item.id === parseInt(id)) {
      foundItem = item;
    } else {
      return {};
    }
  });
  return foundItem;
};
