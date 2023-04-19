import R from "react";
import { Actions, Action, State } from "./type";

export const initialState: State = {
  blurBackground: false,
};

export const StateContext = R.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case Actions.BlurBackground:
      return { ...state, blurBackground: action.payload };
    default:
      return state;
  }
}
