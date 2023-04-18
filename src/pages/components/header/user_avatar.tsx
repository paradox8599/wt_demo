import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function UserAvatar({
  iconSize = "text-4xl",
}: {
  iconSize: string;
}) {
  return (
    <>
      <I icon={faCircleUser} className={`${iconSize}`} />
    </>
  );
}
