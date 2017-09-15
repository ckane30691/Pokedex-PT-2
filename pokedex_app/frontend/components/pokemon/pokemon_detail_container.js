import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';


export const mapStateToProps = state => {
  const pokeDisplay = state.ui.pokeDisplay;
  const pokemon = state.entities.pokemon[state.ui.pokeDisplay];
  const items = state.entities.items;

  return {
    pokemon: pokemon,
    items: items,
    // pokeDisplay: state.ui.pokeDisplay,
    errors: state.ui.errors,
    loading: state.ui.loading
  };
};

export const mapDispatchToProps = dispatch => (
  {
    requestPokemon: (pokeId) => dispatch(requestPokemon(pokeId))
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
