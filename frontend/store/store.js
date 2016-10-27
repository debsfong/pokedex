import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

// const preloadedState = {};

const configureStore = () => (
  createStore(
    RootReducer,
    MasterMiddleware
    // preloadedState
  )
);

export default configureStore;
