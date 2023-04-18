import R from "react";
import { Action, State } from "./type";

export const StateContext = R.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: {},
  dispatch: () => {},
});

export function reducer(state: {}, action: Action) {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
