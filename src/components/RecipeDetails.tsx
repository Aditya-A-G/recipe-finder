import React, { useState, useEffect } from "react";
import { getRecipe } from "../services/api";
import { useParams } from "react-router-dom";
import { Button, Grid, Image, Header, Segment } from "semantic-ui-react";
import { Recipe } from "../models/Recipe";
import { Link } from "react-router-dom";

interface RecipeDetails extends Recipe {

  ingredients: string[];
}

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<RecipeDetails>({} as RecipeDetails);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      let result = await getRecipe(id);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, []);

  return (
    <>
      {Object.keys(recipe).length > 0 ? (
        <Grid container stackable columns={2} className="detailsPageContent">
          <Grid.Column>
            <Button
              as={Link}
              to="/recipes"
              content="Back to recipe List"
              color="yellow"
              style={{ marginBottom: "40px" }}
            />
            <Image src={recipe.image_url} />
          </Grid.Column>
          <Grid.Column>
            <Header size="medium">{recipe.title}</Header>
            <p>Provide By: {recipe.publisher}</p>
            <Button
              as={"a"}
              href={recipe.publisher_url}
              target="_blank"
              content="Publisher WebSite"
              color="blue"
            />
            <Button
              as={"a"}
              href={recipe.source_url}
              target="_blank"
              content="Recipe URL"
              color="green"
            />
            <Header size="large">Ingredients</Header>
            <Segment.Group>
              {recipe &&
                recipe.ingredients.map((data: string, index: number) => {
                  return (
                    <Segment key={index}>
                      <h5>{data}</h5>
                    </Segment>
                  );
                })}
            </Segment.Group>
          </Grid.Column>
        </Grid>
      ) : null}
    </>
  );
};

export default RecipeDetails;
