import { BUY_CAKE } from "./cakeType";

export function buyCake(number) {
  return {
    type: BUY_CAKE,
    payload: number,
  };
}
