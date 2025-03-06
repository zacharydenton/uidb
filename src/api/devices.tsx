import type { UIDBType } from "./UIDB";

export type Device = {
  /** The device's UIDB identifier (a UUID). */
  id: string;
  /** The name of the device (e.g. NanoStation M5). */
  name: string;
  /** The product line the device belongs to (e.g. airMAX). */
  productLine: string;
  /** The device's SKU identifier (e.g. N5N). */
  sku: string;
  /** An identifier for the device's default image. */
  imageId: string;
  /** The original JSON for this device in UIDB. */
  json: object;
};

export function getDevicesFromUIDB(uidb: UIDBType): Device[] {
  const result = [];
  for (const uidbDevice of uidb.devices ?? []) {
    result.push({
      id: uidbDevice.id,
      name: uidbDevice.product.name,
      productLine: uidbDevice.line.name,
      sku: uidbDevice.sku,
      imageId: uidbDevice.images.default,
      json: uidbDevice,
    });
  }
  return result;
}
