import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = () => ({
  // requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps
) (PokemonIndex);
