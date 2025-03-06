import { FormattedMessage } from "react-intl";
import { NavLink, useSearchParams } from "react-router";

import DeviceImage from "../DeviceImage";
import { replaceSearchParam, removeSearchParam } from "../../utils/routes";
import type { Device } from "../../api/devices";

type Props = {
  devices: Device[];
  device: Device;
};

function DeviceDetail({ devices, device }: Props) {
  const [searchParams] = useSearchParams();
  const backUrl = removeSearchParam(searchParams, "device");
  const deviceIndex = devices.indexOf(device);
  let prevIndex = (deviceIndex - 1) % devices.length;
  if (prevIndex < 0) prevIndex = devices.length - 1;
  const prevDevice = devices[prevIndex];
  const nextDevice = devices[(deviceIndex + 1) % devices.length];
  const prevUrl = replaceSearchParam(searchParams, "device", prevDevice.id);
  const nextUrl = replaceSearchParam(searchParams, "device", nextDevice.id);

  return (
    <>
      <div className="p-4 flex justify-between">
        <div>
          <NavLink to={`?${backUrl}`}>Back</NavLink>
        </div>
        <div className="flex gap-4">
          <NavLink to={`?${prevUrl}`}>Prev</NavLink>
          <NavLink to={`?${nextUrl}`}>Next</NavLink>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 p-4 justify-center">
        <div className="flex justify-center bg-gray-50 rounded-lg self-start w-full sm:w-lg">
          <DeviceImage device={device} width={512} />
        </div>
        <div className="w-full sm:w-lg max-w-full">
          <h2 className="text-xl font-bold">{device.name}</h2>
          <h3 className="text-gray-500 mb-4">{device.productLine}</h3>
          <dl className="divide-y divide-gray-200 mb-4">
            <div className="flex py-1 justify-between">
              <dt>
                <FormattedMessage
                  id="devices.product_line"
                  description="The title of the devices 'product line' field"
                  defaultMessage="Product Line"
                />
              </dt>
              <dd className="text-gray-500">{device.productLine}</dd>
            </div>
            <div className="flex py-1 gap-4 justify-between">
              <dt>
                <FormattedMessage
                  id="devices.id"
                  description="The title of the devices 'ID' field"
                  defaultMessage="ID"
                />
              </dt>
              <dd className="text-gray-500">{device.id}</dd>
            </div>
            <div className="flex py-1 gap-4 justify-between">
              <dt>
                <FormattedMessage
                  id="devices.name"
                  description="The title of the devices 'name' field"
                  defaultMessage="Name"
                />
              </dt>
              <dd className="text-gray-500">{device.name}</dd>
            </div>
            <div className="flex py-1 gap-4 justify-between">
              <dt>
                <FormattedMessage
                  id="devices.sku"
                  description="The title of the devices 'SKU' field"
                  defaultMessage="SKU"
                />
              </dt>
              <dd className="text-gray-500">{device.sku}</dd>
            </div>
          </dl>
          <details>
            <summary className="cursor-pointer text-blue-500">
              <FormattedMessage
                id="devices.view_json"
                description="The text for a button that displays the raw JSON for a device"
                defaultMessage="See All Details as JSON"
              />
            </summary>
            <pre className="bg-gray-50 rounded-lg p-4 mt-2 overflow-x-auto text-xs">
              {JSON.stringify(device.json, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </>
  );
}

export default DeviceDetail;
