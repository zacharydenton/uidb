import * as React from "react";
import { useSearchParams } from "react-router";

import DevicesHeader from "./DevicesHeader";
import DevicesList from "./DevicesList";
import DeviceDetail from "./DeviceDetail";
import DeviceDB from "./DeviceDB";

type Props = {
  searchParams: URLSearchParams;
};

type State = {
  deviceDb: DeviceDB;
};

class DevicesPage extends React.Component<Props, State> {
  state = {
    deviceDb: new DeviceDB(),
  };

  render() {
    const { searchParams } = this.props;
    const devices = this.state.deviceDb.devices;
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
}

const WrappedDevicesPage = () => {
  const [searchParams] = useSearchParams();
  return <DevicesPage searchParams={searchParams} />;
};

export default WrappedDevicesPage;
