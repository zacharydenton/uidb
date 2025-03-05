import { useContext } from "react";

import DevicesHeader from "./DevicesHeader";
import UIDBContext from "../../contexts/UIDBContext";

function DevicesPage() {
  const uidb = useContext(UIDBContext);

  return (
    <>
      <DevicesHeader />
      <pre>{JSON.stringify(uidb, null, 2)}</pre>
    </>
  );
}

export default DevicesPage;
