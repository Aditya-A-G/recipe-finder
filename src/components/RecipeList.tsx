import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import { Recipe } from '../models/Recipe'
import RecipeListItem from './RecipeListItem'

interface RecipeListProps{
  recipes: Recipe[],
  searchedQuery: string
}

const RecipeList = ({recipes, searchedQuery}: RecipeListProps) => {
  return (
    <Container>
      <Header
        size='huge'
        content={`RECIPE LIST FOR ${searchedQuery.toUpperCase()}`}
        textAlign='center'
      />
      <Grid columns={4} doubling stretched>
        {recipes && recipes.map((recipe: Recipe) => {
          return (
            <Grid.Column>
              <RecipeListItem recipe={recipe} />
            </Grid.Column>
          )
        })}
        </Grid>
    </Container>
  )
}

export default RecipeList