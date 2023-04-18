import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <>
      <div className={`${className}`}>
        <div className={`relative w-full`}>
          {/* Icon */}
          <I icon={faSearch} className="absolute top-[0.3rem] right-[0.5rem]" />
          {/* Input field */}
          <input
            type="text"
            placeholder="Type to Search"
            className={[
              // size
              "w-full",
              "rounded-full",
              "px-2",
              // style
              "border-[1px]",
              "border-black",
            ].join(" ")}
          />
        </div>
      </div>
    </>
  );
}
