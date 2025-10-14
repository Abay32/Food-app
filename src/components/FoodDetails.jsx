import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = '';

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
        }
        fetchFood();
    }, [foodId])
    

    return (
        <div>
            <div>
                <h1>{ food.title } </h1>
                <img src={ food.image } alt="" /> 
                <span> <strong> ⏱️{food.readyInMinutes} Minutes </strong> </span>
                <span> 👨‍👩‍👧‍👦<strong>Serves {food.servings} </strong>  </span>
                <span>  <strong>  {food.vegiterian ? "🥕 Vegiterian" : "🥩 Non-Vegiterian" } </strong>  </span>
                <span>{food.vegan ? "🐄 Vegan" : ""} </span> 
            </div> 
            <div>
                💲<span> {food.pricePerServing / 100 } Per Serving </span>
            </div>
                       
        </div>
    )
}