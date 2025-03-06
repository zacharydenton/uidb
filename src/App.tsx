import { IntlProvider } from "react-intl";

import DevicesPage from "./components/DevicesPage";
import UIDBProvider from "./api/UIDBProvider";

function App() {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <UIDBProvider>
        <DevicesPage />
      </UIDBProvider>
    </IntlProvider>
  );
}

export default App;
