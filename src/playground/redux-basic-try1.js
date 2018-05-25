import {createStore} from 'redux';

const initialState = {
  count: 0
}

// Create reducer
const countReducer = ((state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy 
      }
      
  
    default:
      return state;
  }
});

// Action generator
const incrementBy = ({incrementBy = 1} = {}) =>({
  type: 'INCREMENT',
  incrementBy
});


// Create store
const store = createStore(countReducer);
console.log(store.getState());

// Dispatching action
store.dispatch(incrementBy({incrementBy: 5}));