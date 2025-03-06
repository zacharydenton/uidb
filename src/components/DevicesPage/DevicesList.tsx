import { useSearchParams } from "react-router";

import DevicesFilters from "./DevicesFilters";
import DevicesGrid from "./DevicesGrid";
import DevicesTable from "./DevicesTable";
import type { Device } from "../../api/devices";

type Props = {
  devices: Device[];
};

function DevicesList({ devices }: Props) {
  const [searchParams] = useSearchParams();
  const isGridActive = searchParams.get("view") === "grid";
  const SubView = isGridActive ? DevicesGrid : DevicesTable;

  return (
    <>
      <DevicesFilters devices={devices} isGridActive={isGridActive} />
      <SubView devices={devices} />
    </>
  );
}

export default DevicesList;
