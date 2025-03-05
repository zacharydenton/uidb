type Props = {
  icon: React.ReactNode;
  title: string;
};

function IconLink({ icon, title }: Props) {
  return (
    <a
      className="text-gray-600 hover:text-blue-500 focus:ring ring-blue-500 cursor-pointer"
      title={title}
    >
      {icon}
    </a>
  );
}

export default IconLink;
