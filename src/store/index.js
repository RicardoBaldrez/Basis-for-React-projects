import { createStore } from 'redux';

const initialState = {
  buttonClicked: false,
};

const reducer = (action, state = initialState) => {
  switch ('BUTTON_CLICKED') {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
