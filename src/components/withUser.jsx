import React from "react";
import { CurrentUserContext } from "../providers/CurrentUserProvider";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const withUser = Component => {
  const WrappedComponent = props => {
    return (
      <CurrentUserContext.Consumer>
        {currentUser => <Component currentUser={currentUser} {...props} />}
      </CurrentUserContext.Consumer>
    );
  };

  WrappedComponent.displayName = `WithUser(${getDisplayName(WrappedComponent)})`;

  return WrappedComponent;
};

export default withUser;
