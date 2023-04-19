import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { Popover } from "@headlessui/react";
import R from "react";

function StoreOption({
  selected = false,
  store,
  onSelect,
}: {
  selected?: boolean;
  store: { loc: string; addr: string };
  onSelect?: () => void;
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center py-1">
        <div
          className={`flex flex-col justify-center items-start pr-16 ${
            selected ? "text-red-700" : "text-black"
          }`}
        >
          <div className="font-bold text-sm">{store.loc}</div>
          <div className="text-[0.6rem]">{store.addr}</div>
        </div>
        {!selected && (
          <div>
            <button
              className="px-4 py-1 text-sm font-bold text-white bg-black rounded-full"
              type="button"
              onClick={onSelect}
            >
              Select
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function StoreDropdown({
  iconSize = "text-4xl",
  className,
}: {
  iconSize?: string;
  className?: string;
}) {
  const [storeIdx, setStoreIdx] = R.useState<number>(0);
  const [msg, setMsg] = R.useState<string>("");
  const msgs: string[] = [
    "Tuesday 9:00 AM - 4:00 PM",
    "Open today until 5:30pm",
  ];

  const stores: { loc: string; addr: string }[] = [
    { loc: "Launceston", addr: "11 Hope Street, Launceston" },
    { loc: "Devonport", addr: "44 Oldaker Street, Devonport" },
    { loc: "Hobart", addr: "128 Main Road, Moonah" },
    { loc: "Burnie", addr: "127 Wilson Street, Burnie" },
  ];

  R.useEffect(() => {
    const index = Math.floor(Math.random() * msgs.length);
    setMsg(msgs[index]);
  }, []);

  return (
    <>
      <div className={className}>
        <Popover>
          <Popover.Button>
            {({ open }) => (
              <div
                className={`flex items-center self-start text-[0.6rem] ${
                  open ? "text-red-700" : "text-white md:text-black"
                }`}
              >
                {/* Store icon */}
                <I icon={faStore} className={iconSize} />
                {/* Store info */}
                <div
                  className={[
                    // "hidden",
                    "flex",
                    "flex-col",
                    "justify-center",
                    "items-start",
                    "md:text-[0.6rem]",
                    "pl-1",
                  ].join(" ")}
                >
                  <div className="font-bold">Store: {stores[storeIdx].loc}</div>
                  <div>{msg}</div>
                </div>
                {/* Store dropdown icon */}
                {stores.length > 1 && (
                  <I
                    icon={open ? faChevronUp : faChevronDown}
                    className="text-xl"
                  />
                )}
              </div>
            )}
          </Popover.Button>
          <Popover.Panel className="absolute z-10 p-4 text-black bg-white rounded-lg shadow-lg">
            {({ close }) => (
              <>
                <div className="font-bold pb-2 mb-2 border-b-4 border-black">
                  Choose store:
                </div>
                {stores.map((store, idx) => {
                  return (
                    <StoreOption
                      key={idx}
                      selected={idx === storeIdx}
                      store={store}
                      onSelect={() => {
                        setStoreIdx(idx);
                        close();
                      }}
                    />
                  );
                })}
              </>
            )}
          </Popover.Panel>
        </Popover>
      </div>
    </>
  );
}
