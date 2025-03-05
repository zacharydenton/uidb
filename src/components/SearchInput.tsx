import { useIntl } from "react-intl";

function SearchInput() {
  const intl = useIntl();

  return (
    <input
      type="search"
      placeholder={intl.formatMessage({
        id: "search.placeholder",
        description: "The placeholder text for a search input",
        defaultMessage: "Search",
      })}
      className="bg-gray-50 hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring ring-blue-500 rounded px-2 py-1"
    />
  );
}

export default SearchInput;
