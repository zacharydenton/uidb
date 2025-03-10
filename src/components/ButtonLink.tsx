import { Link } from "react-router";

type Props = {
  to: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

function ButtonLink({ to, children, ...rest }: Props) {
  return (
    <Link
      to={to}
      className="flex items-center p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 cursor-pointer ring-blue-500 focus:ring focus:outline-none active:text-blue-500"
      {...rest}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
