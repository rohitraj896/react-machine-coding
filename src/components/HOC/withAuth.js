import React from "react";

const withAuth = WrappedComponent => {
  return function (props) {
    if (!props.isLoggedIn) {
      return;
    }
    return <WrappedComponent {...props} />;
  };
};
export default withAuth;
