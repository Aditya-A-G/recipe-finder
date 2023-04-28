import React from "react";
import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <Header title="Our Recipes" bgClass="bg-image">
      <Button content="SEARCH RECIPES" color="blue" />
    </Header>
  );
};

export default Home;
