import UIDB from "../../assets/uidb.json";

import type { Device } from "./types";

export default class DeviceDB {
  devices: Device[];

  constructor() {
    this.devices = [];
    for (const uidbDevice of UIDB.devices) {
      this.devices.push({
        id: uidbDevice.id,
        name: uidbDevice.product.name,
        productLine: uidbDevice.line.name,
        sku: uidbDevice.sku,
        imageId: uidbDevice.images.default,
        json: uidbDevice,
      });
    }
  }
}
