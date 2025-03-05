import Icon from "./Icon";
import type { IconType } from "./Icon";

type Props = {
  icon: IconType;
  title: string;
};

function IconLink({ icon, title }: Props) {
  return (
    <a
      className="text-gray-600 hover:text-blue-500 focus:ring ring-blue-500 cursor-pointer"
      title={title}
    >
      <Icon icon={icon} />
    </a>
  );
}

export default IconLink;
