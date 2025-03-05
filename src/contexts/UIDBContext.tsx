import { createContext } from "react";

import UIDB from "../assets/uidb.json";

const UIDBContext = createContext<typeof UIDB>(UIDB);

export default UIDBContext;
