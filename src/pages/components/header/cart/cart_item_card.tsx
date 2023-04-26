import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import R from "react";
import { Actions, CartItem } from "@/type";
import Image from "next/image";
import _ from "lodash";
import { StateContext } from "@/state";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-0 rounded-full bg-gray-700 text-white w-4 h-4 flex justify-center items-center"
    >
      <div className="-translate-y-0.5 font-bold">x</div>
    </div>
  );
}
export default function CartItemCard({ item }: { item: CartItem }) {
  const { dispatch } = R.useContext(StateContext);
  return (
    <>
      <div className="rounded-xl bg-white flex flex-col p-2 m-1 w-full">
        {/* item info */}
        <div className="flex flex-row justify-start items-between relative">
          {/* Image */}
          {_.isNil(item.img) ? (
            <div className="w-16 h-16 bg-gray-500"></div>
          ) : (
            <Image
              src={item.img ?? ""}
              priority
              alt={item.name}
              width={100}
              height={100}
              className="object-cover"
            />
          )}
          {/* titles */}
          <div className="flex flex-col justify-between items-start pl-1 py-1 text-[0.7rem]">
            <div>{item.name}</div>
            {item.discount && (
              <div className="text-red-500">{item.discount}</div>
            )}
            {item.promotion && (
              <div className="text-green-500">{item.promotion}</div>
            )}
          </div>
          {/* Delete */}
          <DeleteButton
            onClick={() => {
              dispatch({
                type: Actions.RemoveFromCart,
                payload: item.id,
              });
            }}
          />
        </div>
        {/* Dotted divider */}
        <div className="border-b-2 border-dotted border-gray-300 my-1" />
        {/* Quantity & Price */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start items-center">
            {/* Quantity editor */}
            <div className="flex flex-row justify-center items-center">
              {/* minus */}
              <div>
                <I icon={faMinus} className="text-gray-500" />
              </div>
              {/* quantity */}
              <input
                value={item.qty}
                type="number"
                min={0}
                onChange={(e) => {
                  console.log(e.target.value);
                  dispatch({type: Actions.UpdateCartItem, payload: {id: item.id, qty: e.target.value}})
                }}
              />
              {/* <input */}
              {/* plus */}
            </div>
            {/* Unit price */}
          </div>
          {/* Item total price */}
        </div>
      </div>
    </>
  );
}
