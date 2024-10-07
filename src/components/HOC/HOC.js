import React, { useState } from "react";
import withAuth from "./withAuth";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Login from "./Login";

const HOC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const AuthComponent1 = withAuth(Component1);
  const AuthComponent2 = withAuth(Component2);

  const handleClick = () => setIsLoggedIn(true);

  return (
    <div>
      <Login onClick={handleClick} />
      <AuthComponent1 isLoggedIn={isLoggedIn} />
      <AuthComponent2 isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default HOC;
