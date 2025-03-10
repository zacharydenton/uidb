import { useIntl } from "react-intl";

import Icon from "./Icon";

function SearchInput({ ...rest }) {
  const intl = useIntl();

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-gray-500">
        <Icon icon="search" />
      </div>
      <input
        type="search"
        placeholder={intl.formatMessage({
          id: "search.placeholder",
          description: "The placeholder text for a search input",
          defaultMessage: "Search",
        })}
        className="bg-gray-50 hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring ring-blue-500 rounded ps-9 pe-2 py-1"
        {...rest}
      />
    </div>
  );
}

export default SearchInput;
