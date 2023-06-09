import { headerLogo64 } from "@/data";
import Image from "next/image";
import Cart from "./cart/cart";
import SearchBar from "./search_bar";
import StoreDropdown from "./store_dropdown";
import UserButton from "./user_button";

function VerticalDivider({ className }: { className?: string }) {
  return (
    <>
      <div className={`border-l-[1px] border-black ${className}`}></div>
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
      <div className={`px-6 md:px-4 md:flex items-center ${className}`}>
        {children}
      </div>
    </>
  );
}

export default function Header() {
  const iconSize = "w-6 md:w-8";

  return (
    <>
      <div className="w-full bg-white flex flex-row justify-center">
        <div className="md:flex justify-center items-center py-3 w-full">
          {/* Left */}
          <div className="flex-1">
            <Image
              src={headerLogo64}
              alt="Logo"
              width={300}
              height={0}
              className="w-full p-1 px-2 md:px-8"
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
            <SearchBar className="w-full xl:w-[614px]" />
            {/* Right Bottom */}
            <div className="py-2 px-2 md:w-full md:px-0 flex justify-end">
              {/* Store */}
              <HeaderRSection className="hidden">
                <StoreDropdown iconSize={iconSize} />
              </HeaderRSection>
              <VerticalDivider className="hidden md:block" />
              {/* User icon */}
              <HeaderRSection>
                <UserButton iconSize={iconSize} />
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
