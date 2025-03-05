import GridIcon from "./GridIcon";
import ListIcon from "./ListIcon";
import UbiquitiIcon from "./UbiquitiIcon";

export type IconType = "grid" | "list" | "ubiquiti";

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
  }
}

export default Icon;
