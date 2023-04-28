import React, { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

interface SearchProps {
  setSearchedQuery: (searchedQuery: string) => void;
}

const Search = ({ setSearchedQuery }: SearchProps) => {

  const [value, setValue] = useState<string>("");

  const onFormSubmit = (e:React.FormEvent) => {
    // e.preventDefault();
    setSearchedQuery(value);
  };

  return (
    <Grid columns={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Search recipes with our{" "}
          <span style={{ color: "#2185D0" }}> Our Recipe</span>
        </h2>
        <h4>Input recipes separated by comma</h4>
        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="Search..."
            action={{ icon: "search", color: "blue" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Search;
