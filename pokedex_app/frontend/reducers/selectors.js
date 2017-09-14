export const selectAllPokemon = (state) => (
  Object.keys(state.entities.pokemon).map((poke_id) => state.entities.pokemon[poke_id])
);

export const selectPokemon = (state) => {
  state.entities.currentPokemon;
};
