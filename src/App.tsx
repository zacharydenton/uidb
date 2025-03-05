import { IntlProvider } from "react-intl";

import Header from "./components/Header";

function App() {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <Header />
    </IntlProvider>
  );
}

export default App;
