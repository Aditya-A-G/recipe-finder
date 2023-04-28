import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";
import { Recipe } from "../models/Recipe";

const Recipes = () => {
  const [searchedQuery, setSearchedQuery] = useState<string>("pizza");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const getSearchedResults = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };

  useEffect(() => {
    getSearchedResults();
  }, [searchedQuery]);
  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
    </>
  );
};

export default Recipes;
