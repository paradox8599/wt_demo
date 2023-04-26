export enum Actions {
  AddToCart,
  AddAllToCart,
  RemoveFromCart,
  UpdateCartItem,
  ClearCart,
  IncreaseQty,
  DecreaseQty,
}
export type State = {
  cart: CartItem[];
};
export type Action = { type: Actions; payload: any };

export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  img?: string;
  discount?: string;
  promotion?: string;
  onSale?: boolean;
  isNew?: boolean;
};