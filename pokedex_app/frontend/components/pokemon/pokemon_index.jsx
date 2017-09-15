import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';
class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const allPokemon = this.props.pokemon.map((poke) => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <div>
        <ul>
          { allPokemon }
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
      </div>
    );
  }
}

export default PokemonIndex;
