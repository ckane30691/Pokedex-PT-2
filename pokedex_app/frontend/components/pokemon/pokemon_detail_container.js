import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
// import {Route} from 'react-router-dom';

export const mapStateToProps = state => (
  {
    pokeDisplay: state.ui.pokeDisplay,
    errors: state.ui.errors,
    loading: state.ui.loading
  }
);

export const mapDispatchToProps = dispatch => (
  {

  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
