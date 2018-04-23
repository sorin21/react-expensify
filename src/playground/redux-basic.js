import {createStore} from 'redux';

const initialState = {
  count: 0
};

const store = createStore((state = initialState) => {
  return state;
});

// getState returns the current state object 
console.log(store.getState());