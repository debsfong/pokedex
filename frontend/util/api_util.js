export const fetchAllPokemon = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
};

export const fetchPokemon = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success
  });
};

export const createPokemon = (poke, success) => {
  $.ajax({
    method: 'POST',
    url: `api/pokemon`,
    data: {poke},
    success
  });
};
