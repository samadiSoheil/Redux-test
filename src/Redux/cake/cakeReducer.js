import { BUY_CAKE } from "./cakeType";

const initialData = {
  numOfCake: 10,
};

export default function cakeReducer(state = initialData, action) {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    }
    default: {
      return state;
    }
  }
}
