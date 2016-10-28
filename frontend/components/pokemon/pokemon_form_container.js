import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createNewPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  createNewPokemon: (poke) => dispatch(createNewPokemon(poke))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
