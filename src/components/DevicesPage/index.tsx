import { useContext } from "react";
import { useSearchParams } from "react-router";

import { getDevicesFromUIDB } from "../../api/devices";
import UIDBContext from "../../api/UIDBContext";

import DevicesHeader from "./DevicesHeader";
import DevicesList from "./DevicesList";
import DeviceDetail from "./DeviceDetail";

function DevicesPage() {
  const uidb = useContext(UIDBContext);
  const devices = getDevicesFromUIDB(uidb);
  const [searchParams] = useSearchParams();

  const selectedDeviceId = searchParams.get("device");
  const selectedDevice = devices.find(
    (device) => device.id === selectedDeviceId,
  );

  return (
    <>
      <DevicesHeader />
      {selectedDevice ? (
        <DeviceDetail devices={devices} device={selectedDevice} />
      ) : (
        <DevicesList devices={devices} />
      )}
    </>
  );
}

export default DevicesPage;
