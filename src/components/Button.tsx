type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return (
    <button className="px-2 py-1 rounded text-gray-500 hover:bg-gray-50 cursor-pointer ring-blue-500 focus:ring focus:outline-none active:text-blue-500">
      {children}
    </button>
  );
}

export default Button;
