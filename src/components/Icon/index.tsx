import GridIcon from "./GridIcon";
import ListIcon from "./ListIcon";
import UbiquitiIcon from "./UbiquitiIcon";
import SearchIcon from "./SearchIcon";
import ArrowLeftIcon from "./ArrowLeftIcon";
import ArrowRightIcon from "./ArrowRightIcon";

export type IconType =
  | "grid"
  | "list"
  | "ubiquiti"
  | "search"
  | "arrow_left"
  | "arrow_right";

type Props = {
  icon: IconType;
};

function Icon({ icon }: Props) {
  switch (icon) {
    case "grid":
      return <GridIcon />;
    case "list":
      return <ListIcon />;
    case "ubiquiti":
      return <UbiquitiIcon />;
    case "search":
      return <SearchIcon />;
    case "arrow_left":
      return <ArrowLeftIcon />;
    case "arrow_right":
      return <ArrowRightIcon />;
  }
}

export default Icon;
