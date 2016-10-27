export const fetchAllPokemon = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
};

//where do we get id?
export const fetchPokemon = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success
  });
};
