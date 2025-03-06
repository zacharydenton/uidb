import { NavLink } from "react-router";

import Icon from "./Icon";
import type { IconType } from "./Icon";

type Props = {
  icon: IconType;
  to: string;
  title: string;
  activeFilter?: () => boolean;
};

function IconLink({ icon, to, title, activeFilter }: Props) {
  const className =
    "p-1 rounded-sm text-gray-600 hover:bg-gray-50 focus:ring focus:outline-none ring-blue-500 cursor-pointer [&.active]:text-blue-500 [&.active]:bg-gray-50";
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        if (activeFilter != null) {
          isActive = isActive && activeFilter();
        }
        return isActive ? `${className} active` : className;
      }}
      title={title}
    >
      <Icon icon={icon} />
    </NavLink>
  );
}

export default IconLink;
