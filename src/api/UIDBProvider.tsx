import UIDBContext from "./UIDBContext";
import { UIDB } from "./UIDB";

type Props = {
  children: React.ReactNode;
};

function UIDBProvider({ children }: Props) {
  return <UIDBContext.Provider value={UIDB}>{children}</UIDBContext.Provider>;
}

export default UIDBProvider;
