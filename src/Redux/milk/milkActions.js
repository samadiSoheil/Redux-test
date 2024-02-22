import { BUY_MILK } from "./milkType.js";

export function buyMilk(number) {
  return {
    type: BUY_MILK,
    payload: number,
  };
}
