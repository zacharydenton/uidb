type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: Props) {
  return (
    <button
      className="px-2 py-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 cursor-pointer ring-blue-500 focus:ring focus:outline-none active:text-blue-500"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
