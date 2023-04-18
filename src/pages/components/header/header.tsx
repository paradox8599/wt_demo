import { headerLogo64 } from "@/data";
import Image from "next/image";
import Cart from "./cart";
import SearchBar from "./search_bar";
import StoreDropdown from "./store_dropdown";
import UserAvatar from "./user_avatar";

function VerticalDivider() {
  return (
    <>
      <div className="border-l-[1px] border-black"></div>
    </>
  );
}

function HeaderRSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className={`px-1 md:px-2 flex items-center ${className}`}>
        {children}
      </div>
    </>
  );
}

export default function Header() {
  const iconSize = "text-3xl";

  return (
    <>
      <div className="w-full flex flex-row justify-center">
        <div className="sm:flex justify-center items-center py-3 w-full">
          {/* Left */}
          <div className="flex-1">
            <Image
              src={headerLogo64}
              alt="Logo"
              width={300}
              height={0}
              className="w-full p-1 px-8"
            />
          </div>
          {/* Right */}
          <div
            className={[
              "flex-1",
              "flex",
              "flex-row",
              "md:flex-col",
              "justify-evenly",
              "md:justify-center",
              "items-center",
              "px-2",
            ].join(" ")}
          >
            {/* Right Top */}
            <SearchBar className="w-full lg:w-3/4 xl:w-[30wh]" />
            {/* Right Bottom */}
            <div className="py-2 flex justify-end">
              {/* Store */}
              <HeaderRSection>
                <StoreDropdown iconSize={iconSize} />
              </HeaderRSection>
              <VerticalDivider />
              {/* User icon */}
              <HeaderRSection>
                <UserAvatar iconSize={iconSize} />
              </HeaderRSection>
              <VerticalDivider />
              {/* Cart */}
              <HeaderRSection>
                <Cart iconSize={iconSize} />
              </HeaderRSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
