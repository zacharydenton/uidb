import DevicesFilters from "./DevicesFilters";
import DevicesHeader from "./DevicesHeader";
import DevicesTable from "./DevicesTable";

function DevicesPage() {
  return (
    <>
      <DevicesHeader />
      <DevicesFilters />
      <DevicesTable />
    </>
  );
}

export default DevicesPage;
