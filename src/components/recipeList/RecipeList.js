import React from "react";
import "./recipeList.scss";
import {Link} from 'react-router-dom'

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="recipeList">
      <h3 className="title">Check out these Recipes</h3>

      <div className="list">
        {recipes.map((reci, index) => (

          <Link to={`/recipe/${reci.id}`} className="linkItem" key={index.id} >

          <div  className="cardContainer">
            <div className="cardHeader"> {reci.title} </div>
            <div className="recipeInfo">
              <span className="tag level">{reci.level}</span>
              <span className="tag time">{reci.time}</span>
              <span className="tag veg">{reci.isVeg ? "Veg" : "Non-Veg"}</span>
            </div>
            <img
              src={reci.image}
              alt={reci.title}
              width={"30%"}
              className="image"
            />
          </div>
          </Link>

        ))}
      </div>


    </div>
  );
};

export default RecipeList;
