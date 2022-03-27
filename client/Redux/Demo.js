// redux ma ak store hota hy
// jo kah ak global object rakhta hy
// jis ma hamary pass ak state hoti hy
//  or reducer function hota ha

const { createStore } = require("redux");
// createStore redux ki library sy mila

// ab hamary pass ak initial state honi chahiay jis my kuch value hon
// initail state
const initailState = {
  balance: 5000,
};
// redux ma hum empty state define nahi kr skty lehaza hummay kuch na kuch define krna parta ha

// reducer function
const reducer = (state = initailState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: action.value,
      };
    case "WITHDRAW":
      return {
        ...state,
        balance: action.value,
      };
    default:
      state;
  }
};

// create store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

// action perform
store.dispatch({ type: "DEPOSIT", value: 1000 });
store.dispatch({ type: "WITHDRAW", value: 4000 });
