import { createStore } from 'redux';

const initialState = { value: 0, showValue: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'decrement') {
    return { value: state.value - 1, showValue: state.showValue };
  }

  if (action.type === 'increase') {
    return {
      value: state.value + action.amount,
      showValue: state.showValue,
    };
  }

  if (action.type === 'increment') {
    return { value: state.value + 1, showValue: state.showValue };
  }

  if (action.type === 'toggle') {
    return { value: state.value, showValue: !state.showValue };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
