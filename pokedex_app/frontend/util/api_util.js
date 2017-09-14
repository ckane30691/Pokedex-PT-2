export const fetchAllPokemon = () => (
  $.ajax({
    type: "JSON",
    method: "GET",
    url: "/api/pokemon"
  })
);

export const fetchPokemon = (pokemonId) => (
  $.ajax({
    type: "JSON",
    method: "GET",
    url: `/api/pokemon/${pokemonId}`
  })
);
