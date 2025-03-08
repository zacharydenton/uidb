import MiniSearch from "minisearch";

import UIDB from "../../assets/uidb.json";

import type { Device } from "./types";

export default class DeviceDB {
  devices: Device[];
  index: MiniSearch;

  constructor() {
    this.devices = [];
    for (const uidbDevice of UIDB.devices) {
      this.devices.push({
        id: uidbDevice.id,
        name: uidbDevice.product.name,
        shortnames: uidbDevice.shortnames,
        productLine: uidbDevice.line.name,
        sku: uidbDevice.sku,
        imageId: uidbDevice.images.default,
        json: uidbDevice,
      });
    }
    this.index = new MiniSearch({
      fields: ["name", "productLine", "sku", "shortnames"],
      extractField: (doc, fieldName) => {
        if (fieldName === "shortnames") {
          return doc.shortnames.join(" ");
        } else {
          return doc[fieldName];
        }
      },
      searchOptions: {
        prefix: true,
        combineWith: "AND",
      },
    });
    this.index.addAll(this.devices);
  }

  find(deviceId: Device["id"]): Device | undefined {
    return this.devices.find((device) => device.id === deviceId);
  }

  findAll(deviceIds: Device["id"][]): Device[] {
    const idSet = new Set(deviceIds);
    return this.devices.filter((device) => idSet.has(device.id));
  }
}
