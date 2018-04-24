import {createStore} from 'redux';

const initialState = {
  count: 0
};

// normal add function
const add1 = (data) => {
  return data.a + data.b
}
// same function but using destructing for the data argument
// so we destruturing the 1st argument that is passed in add()
// this arg could be string, number, obj(what we choose), array
// c will be the 2nd argument, if we want to add it
const add2 =({a, b}, c) => {
  return a + b + c;
}

// Action generators - functions that return action objects
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   // put 1, the default value, if the condition is false
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

// we destruct the incrementBy from the first object, above example
// start as an empty object if incrementBy doesn't exists
// use a default value for incrementBy, if non incrementBy not exists
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})
const decrementCount = ({decrementBy = 2} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
const setCount = ({ count }) => ({
  type: 'SET',
  count
})
const resetCount = () => ({
  type: 'RESET'
})

// Not Pure Function
// because the output of this func, what it returns doens't depends
// only by the input, but depends by the global variable a
let a = 10;
const add = (b) => {
  return a + b;
};

// Reducer
// 1.Reducers are pure functions(the output is only determined by input)
// in our case this func output, what it returns it is only determinet 
// by things that are passed in, the state and the action
// 2. Never change directly the state or action
const countReducer = (state = initialState, action) => {
  // we handle the dispatch calls
  switch (action.type) {
    case 'INCREMENT':
      // returning and obj reprezent a new state
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      // return the new state
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      // return the new state
      return {
        count: action.count
      }
    case 'RESET':
      // return the new state
      return {
        count: 0
      }

    default:
      // else return default state
      return state;
  }
};


// Store 
// we access the action object here, sec argument
const store = createStore(countReducer);

// Subscription
// watch for changes for redux store
const unsubscribe = store.subscribe(() => {
  // getState returns the current state object 
  console.log(store.getState());
});


// Dispatching Action
// in dispatch we have an action object
// so we dispatch actions
// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 200} ));

store.dispatch(incrementCount());

