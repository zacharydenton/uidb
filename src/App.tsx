import { IntlProvider } from "react-intl";
import { BrowserRouter, Routes, Route } from "react-router";

import DevicesPage from "./components/DevicesPage";
import UIDBProvider from "./api/UIDBProvider";

function App() {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <UIDBProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DevicesPage />} />
          </Routes>
        </BrowserRouter>
      </UIDBProvider>
    </IntlProvider>
  );
}

export default App;
