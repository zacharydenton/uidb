type Props = {
  device: any;
  width: number;
};

function imageUrl(device, width) {
  return `https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2F${device.id}%2Fdefault%2F${device.images.default}.png&w=${width}&q=75`;
}

function DeviceImage({ device, width }: Props) {
  const src = imageUrl(device, width);
  return (
    <img width={width} src={src} alt={device.product.name} loading="lazy" />
  );
}

export default DeviceImage;
