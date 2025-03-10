import * as React from "react";
import { useNavigate, useSearchParams } from "react-router";

import { removeSearchParam, replaceSearchParam } from "../../utils/routes";

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
  state: State = {
    deviceDb: new DeviceDB(),
  };

  handleSearchChange = (query: string) => {
    const { navigate, searchParams } = this.props;
    const newParams =
      query.length > 0
        ? replaceSearchParam(searchParams, "search", query)
        : removeSearchParam(searchParams, "search");
    navigate(`?${newParams}`);
  };

  handleProductLineChange = (productLine: string, checked: boolean) => {
    const { navigate, searchParams } = this.props;
    const newParams = new URLSearchParams(searchParams);

    const lineSet = new Set(newParams.getAll("line"));

    if (checked) {
      lineSet.add(productLine);
    } else {
      lineSet.delete(productLine);
    }

    const lines = [...lineSet];
    lines.sort();
    newParams.delete("line");
    for (const line of lines) {
      newParams.append("line", line);
    }

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

    const productLines = [
      ...new Set(deviceDb.devices.map((device) => device.productLine)),
    ];
    productLines.sort();

    const selectedLines = searchParams.getAll("line");
    if (selectedLines.length > 0) {
      devices = devices.filter((device) =>
        selectedLines.includes(device.productLine),
      );
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
            productLines={productLines}
            onProductLineChange={this.handleProductLineChange}
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
