import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faChevronDown, faStore } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@headlessui/react";
import R from "react";

export default function StoreDropdown({
  iconSize = "text-4xl",
}: {
  iconSize?: string;
}) {
  const [msg, setMsg] = R.useState<string>("");
  const msgs = ["Tuesday 9:00 AM - 4:00 PM", "Open today until 5:30pm"];

  R.useEffect(() => {
    const index = Math.floor(Math.random() * msgs.length);
    setMsg(msgs[index]);
  }, []);

  return (
    <>
      <Menu>
        <Menu.Button>
          <div className="flex items-center self-start">
            {/* Store icon */}
            <I icon={faStore} className={iconSize} />
            {/* Store info */}
            <div
              className={[
                "hidden",
                "md:flex",
                "flex-col",
                "justify-center",
                "items-start",
                "md:text-[0.6rem]",
                "pl-1",
              ].join(" ")}
            >
              <div className="font-bold">Pick up: Wyllie</div>
              <div>{msg}</div>
            </div>
            {/* Store dropdown icon */}
            {/* <I icon={faChevronDown} className="text-xl" /> */}
          </div>
        </Menu.Button>
        <Menu.Items>{/* TODO */}</Menu.Items>
      </Menu>
    </>
  );
}
