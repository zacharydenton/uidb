import { FormattedMessage } from "react-intl";

function Header() {
  return (
    <div className="bg-gray-50 text-gray-500 flex p-2">
      <span>logo</span>
      <div className="px-4 flex flex-1 space-between">
        <h1>
          <FormattedMessage
            id="app.page_title"
            description="The title of a page displaying Ubiquiti devices"
            defaultMessage="Devices"
          />
        </h1>
        <h2>
          <FormattedMessage
            id="app.author"
            description="The author of the application"
            defaultMessage="Zach Denton"
          />
        </h2>
      </div>
    </div>
  );
}

export default Header;
