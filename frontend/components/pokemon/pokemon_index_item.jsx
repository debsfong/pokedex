import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {
  const handleClick = url => e => props.router.push(url);

  return(
    <li className="pokemon-index-item"
    onClick={handleClick(`/pokemon/${props.poke.id}`)}>
      {props.poke.name}
      <img src={props.poke.image_url}></img>
    </li>
  );
};

export default withRouter(PokemonIndexItem);
