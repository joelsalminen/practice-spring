import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Plates from "./Plates";

const Routes = () => {
  const [started, setStarted] = useState(false);
  const startAnimation = () => setStarted(true);

  return (
    <>
      <Plates started={started} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={() => <Login startAnimation={startAnimation} />}
        />
      </Switch>
    </>
  );
};

export default Routes;
