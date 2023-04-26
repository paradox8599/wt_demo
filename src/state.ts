import R from "react";
import { Actions, Action, State } from "./type";

export const initialState: State = {
  cart: [
    {
      id: 1,
      name: "EBony swivel bath spout 200mm",
      price: 11000,
      qty: 1,
      promotion: "Only 3 left in stock!",
    },
    {
      id: 2,
      name: "Contempo graphite matt 30x60cm",
      price: 4080,
      qty: 2,
      discount: "$10 off per m2",
    },
  ],
};

export const StateContext = R.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function reducer(state: State, action: Action) {
  let cart;
  switch (action.type) {
    case Actions.AddToCart:
      return { ...state, cart: [...state.cart, action.payload] };
    case Actions.AddAllToCart:
      return { ...state, cart: [...state.cart, ...action.payload] };
    case Actions.RemoveFromCart:
      cart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart };
    case Actions.UpdateCartItem:
      cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return { ...state, cart };
      
    case Actions.ClearCart:
      return { ...state, cart: [] };
    case Actions.IncreaseQty:
      cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      return { ...state, cart };
    case Actions.DecreaseQty:
      cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      return { ...state, cart };
    default:
      return state;
  }
}
