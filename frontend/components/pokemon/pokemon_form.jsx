import React from 'react';


class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: [],
      items: []
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(poke) {
    return e => this.setState({[poke]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let parsedItems = this.state.items;
    parsedItems = parsedItems.split(", ");

    this.state.items = parsedItems;
    console.log(this.state);

    this.props.createNewPokemon(this.state);

    this.setState({
      name: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: [], // THIS IS AN ARRAY. WE HAD TO CHANGE ITEMS TO AN ARRAY ^
      items: []
    });
  }

  render() {
    const TYPES = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];

    return (
      <form className="pokemon-form" onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" className="input" onChange={this.update('name')}/>
        </label>
        <label>Image Url:
          <input type="text" className="input" onChange={this.update('image_url')}/>
        </label>
        <label>Type:
          <select className="input" onChange={this.update('poke_type')}>
            {TYPES.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>Attack:
          <input type="text" className="input" onChange={this.update('attack')}/>
        </label>
        <label>Defense:
          <input type="text" className="input" onChange={this.update('defense')}/>
        </label>
        <label>Moves:
          <input type="text" className="input" onChange={this.update('moves')}/>
        </label>
        <label>Items:
          <input type="text" className="input" onChange={this.update('items')}/>
        </label>
        <button className="button">Create That Pokemon!</button>
      </form>
    );
  }
}

export default PokemonForm;








//
