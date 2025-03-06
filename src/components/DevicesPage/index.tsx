import { useContext } from "react";
import { useSearchParams } from "react-router";

import { getDevicesFromUIDB } from "../../api/devices";
import UIDBContext from "../../api/UIDBContext";

import DevicesFilters from "./DevicesFilters";
import DevicesHeader from "./DevicesHeader";
import DevicesGrid from "./DevicesGrid";
import DevicesTable from "./DevicesTable";

function DevicesPage() {
  const uidb = useContext(UIDBContext);
  const devices = getDevicesFromUIDB(uidb);

  const [searchParams] = useSearchParams();
  const isGridActive = searchParams.get("view") === "grid";
  const DevicesList = isGridActive ? DevicesGrid : DevicesTable;

  return (
    <>
      <DevicesHeader />
      <DevicesFilters devices={devices} isGridActive={isGridActive} />
      <DevicesList devices={devices} />
    </>
  );
}

export default DevicesPage;
