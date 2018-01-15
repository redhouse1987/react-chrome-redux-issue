import {createStore} from 'redux';
import rootReducer from './reducers/___index';
import {wrapStore} from 'react-chrome-redux';

const rootReducerPar = (state, action) => {
  return rootReducer(state, action)
}

const store = createStore(rootReducerPar);

store.subscribe(() => {
  console.log(store.getState());
});

wrapStore(store, {
  portName: 'example'
});
