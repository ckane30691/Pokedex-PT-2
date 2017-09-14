import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.requestAllPokemon();
  }

  render(){
    console.log(this.props.pokemon);
    const allPokemon = this.props.pokemon.map((poke) => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <div>
        <ul>
          { allPokemon }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
