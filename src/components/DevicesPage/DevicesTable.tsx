import { FormattedMessage } from "react-intl";

import type { Device } from "../../api/devices";
import DeviceImage from "../DeviceImage";

function TableHeader() {
  return (
    <thead className="sticky top-0 bg-white/95 shadow-[0_1px_0_0] shadow-gray-200">
      <tr>
        <th></th>
        <th className="p-2">
          <FormattedMessage
            id="devices.product_line"
            description="The title of the devices 'product line' field"
            defaultMessage="Product Line"
          />
        </th>
        <th className="p-2">
          <FormattedMessage
            id="devices.name"
            description="The title of the devices 'name' field"
            defaultMessage="Name"
          />
        </th>
        <th className="p-2">
          <FormattedMessage
            id="devices.sku"
            description="The title of the devices 'SKU' field"
            defaultMessage="SKU"
          />
        </th>
      </tr>
    </thead>
  );
}

type TableRowProps = {
  device: Device;
};

function TableRow({ device }: TableRowProps) {
  return (
    <tr className="border-b border-gray-200">
      <td className="w-[32px]">
        <DeviceImage device={device} width={32} />
      </td>
      <td className="p-2">{device.productLine}</td>
      <td className="p-2">{device.name}</td>
      <td className="p-2">{device.sku}</td>
    </tr>
  );
}

type TableBodyProps = {
  devices: Device[];
};

function TableBody({ devices }: TableBodyProps) {
  return (
    <tbody>
      {devices.map((device: Device) => (
        <TableRow key={device.id} device={device} />
      ))}
    </tbody>
  );
}

type Props = {
  devices: Device[];
};

function DevicesTable({ devices }: Props) {
  return (
    <div className="px-4">
      <table className="w-full text-left">
        <TableHeader />
        <TableBody devices={devices} />
      </table>
    </div>
  );
}

export default DevicesTable;
