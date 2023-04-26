import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import R from "react";
import { Popover } from "@headlessui/react";
import { CartItem } from "@/type";
import CartItemCard from "./cart_item_card";
import { StateContext } from "@/state";

function CartButton({
  cart,
  totalPrice,
  active,
  iconSize = "w-8 md:w-10",
}: {
  cart: CartItem[];
  active: boolean;
  totalPrice: number;
  iconSize: string;
}) {
  const count = cart.length;

  return (
    <>
      <div className="flex justify-start items-center translate-y-0.5">
        <div className="relative">
          <div
            className={[
              // style
              "h-[1rem]",
              "rounded-full",
              active ? "bg-red-500" : "bg-red-700",
              // position
              "absolute",
              "left-[50%]",
              "-translate-x-[30%]",
              "-translate-y-1.5",
              // content
              "text-center",
              "text-[0.7rem]",
              "text-white",
              count ? "px-[0.2rem]" : "",
            ].join(" ")}
          >
            {count ? count : ""}
          </div>
          <I
            icon={faCartShopping}
            className={`${iconSize} ${active ? "text-green-700" : ""}`}
          />
        </div>
        <div className="hidden md:flex flex-col justify-center items-start pl-2">
          <div className="font-bold text-sm">${totalPrice.toFixed(2)}</div>
          <div className="text-[0.6rem]">in your cart</div>
        </div>
      </div>
    </>
  );
}

function Divider() {
  return <div className="border-b-4 border-black py-2" />;
}

export default function Cart({ iconSize = "" }: { iconSize: string }) {
  const { state, dispatch } = R.useContext(StateContext);
  const totalPrice = R.useMemo(
    () => state.cart.map((i) => i.price).reduce((a, b) => a + b, 0) / 100,
    [state.cart]
  );

  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button>
              <CartButton
                cart={state.cart}
                totalPrice={totalPrice}
                iconSize={iconSize}
                active={open}
              />
            </Popover.Button>
            <Popover.Overlay className={"fixed inset-0 bg-black opacity-30"} />
            <Popover.Panel className="fixed md:absolute w-full md:w-[20rem] right-0 md:mx-2 p-4 bg-[#f5f5f5] shadow-lg rounded-lg">
              {({ close }) => (
                <>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-md uppercase">
                      View Your Cart
                    </div>
                    <I
                      icon={faChevronUp}
                      className="w-6"
                      onClick={() => {
                        return close();
                      }}
                    />
                  </div>
                  {/* Divider */}
                  <Divider />
                  {/* Cart info */}
                  <div className="flex flex-col font-bold text-sm pt-2">
                    {/* Subtotal */}
                    <div className="flex flex-row justify-between items-center">
                      <div className="uppercase">Cart Subtotal:</div>
                      <div className="">${totalPrice.toFixed(2)}</div>
                    </div>
                    {/* Total Saved */}
                    <div className="flex flex-row justify-between items-center text-red-500">
                      <div className="uppercase">Total Saved:</div>
                      <div className="">$0</div>
                    </div>
                    {/* Buttons */}
                    <button className="w-full py-2 px-4 my-1 border-2 font-bold rounded-full text-green-500 border-green-500 uppercase">
                      Continue Shopping
                    </button>
                    <button className="w-full py-2 px-4 my-1 font-bold rounded-full text-white bg-[#40413b] uppercase">
                      Continue Shopping
                    </button>
                  </div>
                  {/* Divider */}
                  <Divider />
                  {/* Cart list */}
                  <div className="flex flex-col justify-center items-start py-1">
                    {state.cart.map((item) => {
                      return <CartItemCard item={item} key={item.id} />;
                    })}
                  </div>
                </>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
