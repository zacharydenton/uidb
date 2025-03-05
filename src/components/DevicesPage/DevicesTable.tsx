import { useContext } from "react";
import { FormattedMessage } from "react-intl";

import DeviceImage from "../DeviceImage";
import UIDBContext from "../../contexts/UIDBContext";

function TableHeader() {
  return (
    <thead className="sticky top-0 bg-white/95 shadow-[0_1px_0_0] shadow-gray-200">
      <tr>
        <th></th>
        <th className="p-2">
          <FormattedMessage
            id="devices.product_line"
            description="The title of the devices 'product line' field"
            defaultMessage="Product line"
          />
        </th>
        <th className="p-2">
          <FormattedMessage
            id="devices.name"
            description="The title of the devices 'name' field"
            defaultMessage="Name"
          />
        </th>
      </tr>
    </thead>
  );
}

function TableRow({ device }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="w-[32px]">
        <DeviceImage device={device} width={32} />
      </td>
      <td className="p-2">{device.line.name}</td>
      <td className="p-2">{device.product.name}</td>
    </tr>
  );
}

function TableBody() {
  const uidb = useContext(UIDBContext);

  return (
    <tbody>
      {uidb.devices.map((device) => (
        <TableRow key={device.id} device={device} />
      ))}
    </tbody>
  );
}

function DevicesTable() {
  return (
    <div className="px-4">
      <table className="w-full text-left">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default DevicesTable;
