import { useContext } from "react";

import { getDevicesFromUIDB } from "../../api/devices";
import UIDBContext from "../../api/UIDBContext";

import DevicesFilters from "./DevicesFilters";
import DevicesHeader from "./DevicesHeader";
import DevicesTable from "./DevicesTable";

function DevicesPage() {
  const uidb = useContext(UIDBContext);
  const devices = getDevicesFromUIDB(uidb);

  return (
    <>
      <DevicesHeader />
      <DevicesFilters devices={devices} />
      <DevicesTable devices={devices} />
    </>
  );
}

export default DevicesPage;
