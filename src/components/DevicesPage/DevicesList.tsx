import { useSearchParams } from "react-router";

import DevicesFilters from "./DevicesFilters";
import DevicesGrid from "./DevicesGrid";
import DevicesTable from "./DevicesTable";
import type { Device } from "./types";

type Props = {
  devices: Device[];
  onSearchChange: (query: string) => void;
  productLines: string[];
  onProductLineChange: (productLine: string, checked: boolean) => void;
};

function DevicesList({
  devices,
  onSearchChange,
  productLines,
  onProductLineChange,
}: Props) {
  const [searchParams] = useSearchParams();
  const isGridActive = searchParams.get("view") === "grid";
  const SubView = isGridActive ? DevicesGrid : DevicesTable;

  return (
    <>
      <DevicesFilters
        devices={devices}
        isGridActive={isGridActive}
        onSearchChange={onSearchChange}
        productLines={productLines}
        onProductLineChange={onProductLineChange}
      />
      <SubView devices={devices} />
    </>
  );
}

export default DevicesList;
