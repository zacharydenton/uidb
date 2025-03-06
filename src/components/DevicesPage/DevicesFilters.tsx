import { useIntl, FormattedMessage } from "react-intl";

import Button from "../Button";
import IconLink from "../IconLink";
import SearchInput from "../SearchInput";
import type { Device } from "../../api/devices";

type Props = {
  devices: Device[];
};

function DevicesCount({ devices }: Props) {
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

function ViewToggle() {
  const intl = useIntl();

  return (
    <div className="flex gap-2">
      <IconLink
        icon="list"
        title={intl.formatMessage({
          id: "devices.list_view",
          description:
            "The alt text for a button that activates the devices list view",
          defaultMessage: "List view",
        })}
      />
      <IconLink
        icon="grid"
        title={intl.formatMessage({
          id: "devices.grid_view",
          description:
            "The alt text for a button that activates the devices grid view",
          defaultMessage: "Grid view",
        })}
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

function DevicesFilters({ devices }: Props) {
  return (
    <div className="p-4 flex justify-between">
      <div className="flex gap-4 items-center">
        <SearchInput />
        <DevicesCount devices={devices} />
      </div>
      <div className="flex gap-4 items-center">
        <ViewToggle />
        <FilterDropdown />
      </div>
    </div>
  );
}

export default DevicesFilters;
