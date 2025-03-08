import { useSearchParams } from "react-router";

import DevicesFilters from "./DevicesFilters";
import DevicesGrid from "./DevicesGrid";
import DevicesTable from "./DevicesTable";
import type { Device } from "./types";

type Props = {
  devices: Device[];
  onSearchChange: (query: string) => void;
};

function DevicesList({ devices, onSearchChange }: Props) {
  const [searchParams] = useSearchParams();
  const isGridActive = searchParams.get("view") === "grid";
  const SubView = isGridActive ? DevicesGrid : DevicesTable;

  return (
    <>
      <DevicesFilters
        devices={devices}
        isGridActive={isGridActive}
        onSearchChange={onSearchChange}
      />
      <SubView devices={devices} />
    </>
  );
}

export default DevicesList;
