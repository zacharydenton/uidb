import { NavLink, useSearchParams } from "react-router";

import { replaceSearchParam } from "../../utils/routes";
import type { Device } from "../../api/devices";
import DeviceImage from "../DeviceImage";

type DeviceCardProps = {
  device: Device;
};

function DeviceCard({ device }: DeviceCardProps) {
  const [searchParams] = useSearchParams();
  const deviceUrl = replaceSearchParam(searchParams, "device", device.id);

  return (
    <NavLink
      to={`?${deviceUrl}`}
      className="relative group flex flex-col rounded-lg border border-gray-200 text-gray-600 hover:text-blue-500 focus:ring ring-blue-500 focus:outline-none cursor-pointer overflow-hidden"
    >
      <div className="absolute px-2 py-1 text-xs font-bold top-2 right-2 rounded-sm bg-white/95 text-blue-500">
        {device.productLine}
      </div>
      <div className="bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center">
        <DeviceImage device={device} width={256} />
      </div>
      <div className="flex-1 bg-white group-hover:bg-gray-50 p-4">
        <h3 className="text-gray-700 mb-2">{device.name}</h3>
        <h4 className="text-gray-500 text-sm">{device.sku}</h4>
      </div>
    </NavLink>
  );
}

type Props = {
  devices: Device[];
};

function DevicesGrid({ devices }: Props) {
  return (
    <div className="px-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} />
      ))}
    </div>
  );
}

export default DevicesGrid;
