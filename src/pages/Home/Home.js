import React from "react";
import { Header } from "../../components";
import { headerObj } from "./Data";

const Home = () => {
  return (
    <>
      <Header {...headerObj} />
    </>
  );
};

export default Home;
