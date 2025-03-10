import { IntlProvider } from "react-intl";
import { BrowserRouter, Routes, Route } from "react-router";

import DevicesPage from "./components/DevicesPage";

function App() {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <Routes>
          <Route path="/" element={<DevicesPage />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
