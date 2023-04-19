import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import R from "react";

export default function Cart({ iconSize = "text-4xl" }: { iconSize: string }) {
  const [count, setCount] = R.useState<number>(0);

  R.useEffect(() => {
    setCount(Math.floor(Math.random() * 20));
  }, []);

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
