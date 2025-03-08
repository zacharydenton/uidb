export type Device = {
  /** The device's UIDB identifier (a UUID). */
  id: string;
  /** The name of the device (e.g. NanoStation M5). */
  name: string;
  /** A list of short names for the device (e.g. [N5N]). */
  shortnames: string[];
  /** The product line the device belongs to (e.g. airMAX). */
  productLine: string;
  /** The device's SKU identifier (e.g. N5N). */
  sku: string;
  /** An identifier for the device's default image. */
  imageId: string;
  /** The original JSON for this device in UIDB. */
  json: object;
};
