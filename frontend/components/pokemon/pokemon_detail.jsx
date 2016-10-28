import React from 'react';
import { withRouter } from 'react-router';

const PokemonDetails = ({ poke, router, children }) => {
const handleClick = url => e => router.push(url);

  return (
    <section className="pokemon">
      <img src={poke.image_url}></img>
      <h1>{poke.name}</h1>
      <ul>
        <li>Type: {poke.type}</li>
        <li>Attack: {poke.attack}</li>
        <li>Defense: {poke.defense}</li>
        <li>Moves: {poke.moves.join(", ")}</li>
        <li>Items:
          <ul>
            {poke.items.map((item, idx) => (
              <li key={idx} onClick={handleClick(`/pokemon/${poke.id}/items/${item.id}`)}>
                <img src={item.image_url}/>
              </li>
            ))}
            {children}
          </ul>
        </li>
      </ul>
    </section>
  );

};


export default withRouter(PokemonDetails);
