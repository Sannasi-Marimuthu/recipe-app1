import React, { useEffect, useState } from "react";
import { fetchRecipes, fetchRecipesById } from "./utils/Api";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import RecipeList from "./components/recipeList/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchRecipesData();
  }, []);

  return (
    <div>
      <Header title={"Recipe App"} />

      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
