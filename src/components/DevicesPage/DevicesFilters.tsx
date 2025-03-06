import { useIntl, FormattedMessage } from "react-intl";
import { useSearchParams } from "react-router";

import Button from "../Button";
import IconLink from "../IconLink";
import SearchInput from "../SearchInput";
import type { Device } from "../../api/devices";

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

  const listUrl = new URLSearchParams(searchParams);
  listUrl.set("view", "list");
  const gridUrl = new URLSearchParams(searchParams);
  gridUrl.set("view", "grid");

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

function FilterDropdown() {
  return (
    <Button>
      <FormattedMessage
        id="devices.filter"
        description="The text of a button that activates device filters"
        defaultMessage="Filter"
      />
    </Button>
  );
}

type Props = {
  devices: Device[];
  isGridActive: boolean;
};

function DevicesFilters({ devices, isGridActive }: Props) {
  return (
    <div className="p-4 flex justify-between">
      <div className="flex gap-4 items-center">
        <SearchInput />
        <DevicesCount devices={devices} />
      </div>
      <div className="flex gap-4 items-center">
        <ViewToggle isGridActive={isGridActive} />
        <FilterDropdown />
      </div>
    </div>
  );
}

export default DevicesFilters;
