import * as React from "react";
import { useNavigate, useSearchParams } from "react-router";

import { replaceSearchParam } from "../../utils/routes";

import DevicesHeader from "./DevicesHeader";
import DevicesList from "./DevicesList";
import DeviceDetail from "./DeviceDetail";
import DeviceDB from "./DeviceDB";

type Props = {
  searchParams: URLSearchParams;
  navigate: (path: string) => void;
};

type State = {
  deviceDb: DeviceDB;
};

class DevicesPage extends React.Component<Props, State> {
  state = {
    deviceDb: new DeviceDB(),
  };

  handleSearchChange = (query: string) => {
    const { navigate, searchParams } = this.props;
    const newParams = replaceSearchParam(searchParams, "search", query);
    navigate(`?${newParams}`);
  };

  render() {
    const { searchParams } = this.props;
    const { deviceDb } = this.state;
    let devices = deviceDb.devices;

    const selectedDeviceId = searchParams.get("device");
    const selectedDevice =
      selectedDeviceId != null ? deviceDb.find(selectedDeviceId) : null;

    const query = searchParams.get("search");
    if (query) {
      const hits = deviceDb.index.search(query);
      devices = deviceDb.findAll(hits.map((hit) => hit.id));
    }

    return (
      <>
        <DevicesHeader />
        {selectedDevice ? (
          <DeviceDetail devices={devices} device={selectedDevice} />
        ) : (
          <DevicesList
            devices={devices}
            onSearchChange={this.handleSearchChange}
          />
        )}
      </>
    );
  }
}

const WrappedDevicesPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return <DevicesPage navigate={navigate} searchParams={searchParams} />;
};

export default WrappedDevicesPage;
