import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function NavMenu() {
  const data = {
    Home: {},
    "Tile Range": {
      "Floor Tiles": [
        "White Floor Tiles",
        "Brown Floor Tiles",
        "Black Floor Tiles",
        "Grey Floor Tiles",
        "Other Floor Tiles",
      ],
      "Wall Tiles": [
        "White Wall Tiles",
        "Brown Wall Tiles",
        "Black Wall Tiles",
        "Grey Wall Tiles",
        "Other Wall Tiles",
      ],
      "External Tiles": [
        "White External Tiles",
        "Brown External Tiles",
        "Other External Tiles",
      ],
      "Slate & Stone": [],
      "Culture Stone": [],
    },
    "Carpet, Vinyl & Timber Flooring": {
      "Carpet Range": [
        "Indoor/Outdoor Carpet",
        "Carpet Accessories",
        "Carpet Care",
      ],
      "Vinyl & Floating Floors": [
        "Vinyl Planks",
        "Vinyl Tiles",
        "Laminate Floating Floors",
        "Hybrid Vinyl Planks",
      ],
      "Installation Products": ["Carpet Gripper", "Heatbond Tape"],
    },
  };
  return (
    <>
      <div className="h-12 bg-[#40413B] text-white flex items-center px-4">
        {Object.keys(data).map((key, i) => {
          return (
            <>
              <div className="flex justify-center items-center px-2">
                <div key={i} className="font-bold pr-2">
                  {key}
                </div>

                {i > 0 ? <I icon={faChevronDown} className="text-xl" /> : ""}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
