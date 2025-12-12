import React, { useEffect, useState } from "react";
import { fetchRecipes, fetchRecipesById } from "./utils/Api";
import Loader from "./components/loader/Loader";


const App = () => {

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true)



useEffect(() => {
  
  const fetchRecipesData = async () => {

    try {
      const data = await fetchRecipes()
      setRecipes(data)
      setLoading(false)
      
    } catch (error) {
        setLoading(false)
    }

    // const data = await fetchRecipes();
    // setRecipes(data)
  }
  fetchRecipesData()
},[])

  return <div>
    Recipe App



    { loading ?  <Loader name={'React App is Loading'} /> :  recipes.map((data) => (
        <h3 >{data.title}</h3>
      ))}

      {/* <h3> {recipes.title} </h3> */}

  </div>;
};

export default App;




