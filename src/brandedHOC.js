import React from "react";

import { CURRENT_BRAND } from "src/config";

export const brandedHOC = ComponentsMap => {
  const Component = ComponentsMap[CURRENT_BRAND];
  return class BrandedHOC extends React.Component {
    static displayName = `BrandedHOC(${Component.displayName ||
      Component.name})`;

    render() {
      return <Component {...this.props} />;
    }
  };
};
