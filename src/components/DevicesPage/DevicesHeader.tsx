import { useIntl, FormattedMessage } from "react-intl";

import IconLink from "../IconLink";

function DevicesHeader() {
  const intl = useIntl();

  return (
    <div className="bg-gray-50 text-gray-500 flex p-1">
      <IconLink
        icon="ubiquiti"
        title={intl.formatMessage({
          id: "devices.reset_text",
          description: "The alt text for a button that resets the devices list",
          defaultMessage: "Reset device filters",
        })}
      />
      <div className="px-4 flex flex-1 justify-between items-center">
        <h1>
          <FormattedMessage
            id="devices.page_title"
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

export default DevicesHeader;
