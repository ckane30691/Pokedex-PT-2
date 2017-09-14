import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>{this.props.match.params.pokemonId}</div>
    );
  }
}

export default PokemonDetail;
