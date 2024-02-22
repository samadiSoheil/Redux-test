import { BUY_MILK } from "./milkType.js";

const initialData = {
  numOfMilk: 10,
};

export default function milkReducer(state = initialData, action) {
  switch (action.type) {
    case BUY_MILK: {
      return {
        ...state,
        numOfMilk: state.numOfMilk - 1,
      };
    }
    default: {
      return state;
    }
  }
}
