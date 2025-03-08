import { useIntl, FormattedMessage } from "react-intl";
import { Link, useSearchParams } from "react-router";

import Button from "../Button";
import IconLink from "../IconLink";
import SearchInput from "../SearchInput";
import { removeSearchParam, replaceSearchParam } from "../../utils/routes";
import type { Device } from "./types";

type DevicesCountProps = {
  devices: Device[];
};

function DevicesCount({ devices }: DevicesCountProps) {
  return (
    <span className="text-gray-500">
      <FormattedMessage
        id="devices.count"
        description="The number of devices in the devices list"
        defaultMessage="
{count, plural,
  one {{count, number} Device}
  other {{count, number} Devices}
}"
        values={{ count: devices.length }}
      />
    </span>
  );
}

type ViewToggleProps = {
  isGridActive: boolean;
};

function ViewToggle({ isGridActive }: ViewToggleProps) {
  const intl = useIntl();
  const [searchParams] = useSearchParams();

  const listUrl = replaceSearchParam(searchParams, "view", "list");
  const gridUrl = replaceSearchParam(searchParams, "view", "grid");

  return (
    <div className="flex gap-2">
      <IconLink
        to={`?${listUrl}`}
        icon="list"
        title={intl.formatMessage({
          id: "devices.list_view",
          description:
            "The alt text for a button that activates the devices list view",
          defaultMessage: "List view",
        })}
        activeFilter={() => !isGridActive}
      />
      <IconLink
        to={`?${gridUrl}`}
        icon="grid"
        title={intl.formatMessage({
          id: "devices.grid_view",
          description:
            "The alt text for a button that activates the devices grid view",
          defaultMessage: "Grid view",
        })}
        activeFilter={() => isGridActive}
      />
    </div>
  );
}

type FilterDropdownProps = {
  productLines: string[];
  onProductLineChange: (productLine: string, checked: boolean) => void;
};

function FilterDropdown({
  productLines,
  onProductLineChange,
}: FilterDropdownProps) {
  const [searchParams] = useSearchParams();
  const selectedLines = searchParams.getAll("line");
  const handleProductLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onProductLineChange(e.currentTarget.value, e.currentTarget.checked);
  };
  const resetParams = removeSearchParam(searchParams, "line");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dropdown = document.getElementById("filter-dropdown")!;
    const buttonRect = e.currentTarget.getBoundingClientRect();
    dropdown.style.insetBlockStart = `${scrollY + buttonRect.bottom + 8}px`;
    dropdown.style.insetInlineStart = `${buttonRect.left}px`;
  };

  return (
    <div>
      <Button popoverTarget="filter-dropdown" onClick={handleClick}>
        <FormattedMessage
          id="devices.filter"
          description="The text of a button that activates device filters"
          defaultMessage="Filter"
        />
      </Button>
      <div
        id="filter-dropdown"
        popover="auto"
        className="absolute shadow-md p-4 rounded w-64 -ml-64 border border-gray-200"
      >
        <h3 className="font-bold mb-2">
          <FormattedMessage
            id="devices.product_line"
            description="The title of the devices 'product line' field"
            defaultMessage="Product Line"
          />
        </h3>
        <div className="flex flex-col mb-2">
          {productLines.map((productLine) => (
            <label key={productLine} className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={productLine}
                onChange={handleProductLineChange}
                checked={selectedLines.includes(productLine)}
              />
              {productLine}
            </label>
          ))}
        </div>
        <Link className="text-red-500" to={`?${resetParams}`}>
          <FormattedMessage
            id="devices.reset"
            description="The text of a button that resets device filters"
            defaultMessage="Reset"
          />
        </Link>
      </div>
    </div>
  );
}

type Props = {
  devices: Device[];
  isGridActive: boolean;
  onSearchChange: (query: string) => void;
  productLines: string[];
  onProductLineChange: (productLine: string, checked: boolean) => void;
};

function DevicesFilters({
  devices,
  isGridActive,
  onSearchChange,
  productLines,
  onProductLineChange,
}: Props) {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    onSearchChange(query);
  };

  return (
    <div className="p-4 flex justify-between">
      <div className="flex gap-4 items-center">
        <SearchInput defaultValue={searchQuery} onChange={handleSearchChange} />
        <DevicesCount devices={devices} />
      </div>
      <div className="flex gap-4 items-center">
        <ViewToggle isGridActive={isGridActive} />
        <FilterDropdown
          productLines={productLines}
          onProductLineChange={onProductLineChange}
        />
      </div>
    </div>
  );
}

export default DevicesFilters;
