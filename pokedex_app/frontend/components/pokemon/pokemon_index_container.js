import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';
import {selectAllPokemon, selectPokemon} from '../../reducers/selectors';
import {requestAllPokemon, requestPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  currentPokemon: selectPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  requestPokemon: (pokeId) => dispatch(requestPokemon(pokeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
