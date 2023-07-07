import { RecipeItem } from "./components/recipe-item/RecipeItem";
import { Header } from "./components/Header/Header";
import { SearchFilter } from "./components/SearchFilter/SearchFilter";
import { CreateRecipe } from "./components/create-recipe/CreateRecipe";
import { useState } from "react";

import { useGetRecipesQuery } from "./store/api/api";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryTerm, setQueryTerm] = useState("");
  const { isLoading, data } = useGetRecipesQuery(queryTerm);
  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };
  return (
    <section>
      <Header />
      <CreateRecipe />
      <p style={{textAlign:"center"}}>If you want to find:</p>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  );
}

export default App;
