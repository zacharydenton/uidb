import UIDBContext from "./UIDBContext";
import UIDB from "../assets/uidb.json";

type Props = {
  children: React.ReactNode;
};

function UIDBProvider({ children }: Props) {
  return <UIDBContext.Provider value={UIDB}>{children}</UIDBContext.Provider>;
}

export default UIDBProvider;
