import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestPokemon(this.props.match.params.pokemonId);
    // console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location !== newProps.location){
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  render(){

    const imgUrl = this.props.pokemon ? this.props.pokemon.image_url : "";
    const items = this.props.items.length !== 0 ?
    this.props.items.map((item) => <Link to={`/pokemon/${this.props.pokemon.id}/item/${item.id}`}>{item.name}</Link>)
    :
     "";

    return (
      <div className="poke-display">
        <img src={imgUrl}/>
        {items}
        <Route path={`/pokemon/${this.props.match.params.pokemonId}/item/:itemId`}
          component={ItemDetailContainer}/>
      </div>
    );
  }
}

export default PokemonDetail;
