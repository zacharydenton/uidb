import { useContext } from "react";

import DevicesFilters from "./DevicesFilters";
import DevicesHeader from "./DevicesHeader";
import UIDBContext from "../../contexts/UIDBContext";

function DevicesPage() {
  const uidb = useContext(UIDBContext);

  return (
    <>
      <DevicesHeader />
      <DevicesFilters />
      <pre>{JSON.stringify(uidb, null, 2)}</pre>
    </>
  );
}

export default DevicesPage;
