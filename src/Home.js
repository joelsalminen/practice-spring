import React from "react";
import Card from "./Card";
import auth from "./auth";
import { Redirect } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      {!auth.isAuthenticated() ? <Redirect to="/login" /> : <Card />}
    </div>
  );
};

export default Home;
