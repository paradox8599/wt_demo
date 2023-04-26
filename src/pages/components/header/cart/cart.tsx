import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import R from "react";
import { Popover } from "@headlessui/react";

function CartItem({ item }: { item: any }) {
  return <></>;
}

function CartButton({ count, iconSize = "w-8 md:w-10" }: { count: number; iconSize: string }) {
  return (
    <>
      <div className="flex justify-start items-center">
        <div className="relative">
          <div
            className={[
              // style
              "h-[1rem]",
              "rounded-full",
              "bg-red-700",
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
          <I icon={faCartShopping} className={iconSize} />
        </div>
        <div className="hidden md:flex flex-col justify-center items-start pl-2">
          <div className="font-bold text-sm">
            $
            {Array(count)
              .fill(1)
              .map((v) => {
                return Math.random() * 30;
              })
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
          </div>
          <div className="text-[0.6rem]">in your cart</div>
        </div>
      </div>
    </>
  );
}

export default function Cart({ iconSize = "" }: { iconSize: string }) {
  const [count, setCount] = R.useState<number>(0);

  R.useEffect(() => {
    setCount(Math.floor(Math.random() * 20));
  }, []);

  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button>
              <CartButton count={count} iconSize={iconSize} />
            </Popover.Button>
            <Popover.Panel className="absolute w-full md:w-[20rem] right-0 mx-2 p-4 bg-white shadow-lg rounded-lg">
              {({ close }) => (
                <>
                  <div className="flex justify-between items-center py-2 border-b-4 border-black">
                    <div className="font-bold text-md uppercase">
                      View Your Cart
                    </div>
                    <I
                      icon={faChevronUp}
                      className="w-6"
                      onClick={() => close()}
                    />
                  </div>
                  {/* Cart info */}
                  <div className="flex flex-col font-bold text-sm pt-2">
                    {/* Subtotal */}
                    <div className="flex flex-row justify-between items-center">
                      <div className="uppercase">Cart Subtotal:</div>
                      <div className="">$123.45</div>
                    </div>
                    {/* Total Saved */}
                    <div className="flex flex-row justify-between items-center text-red-500">
                      <div className="uppercase">Total Saved:</div>
                      <div className="">$67.89</div>
                    </div>
                    {/* Buttons */}
                    <button className="w-full py-2 px-4 my-1 border-2 font-bold rounded-full text-green-500 border-green-500 uppercase">
                      Continue Shopping
                    </button>
                    <button className="w-full py-2 px-4 my-1 font-bold rounded-full text-white bg-[#40413b] uppercase">
                      Continue Shopping
                    </button>
                  </div>
                  {/* Cart list */}
                  <div className="flex flex-col justify-center items-start"></div>
                </>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
