import { createContext } from "react";

import type { UIDBType } from "./UIDB";

const UIDBContext = createContext<UIDBType>({ devices: [] });

export default UIDBContext;
