import { useEffect, useState } from "react";
import styles from './fooddetails.module.css';

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = '';

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
            console.log(data)
        }
        fetchFood();
    }, [foodId])
     

    return (
        <div >
            <div className={styles.recipeContainer}>           
                <h1 className={styles.recipeTitle}>{ food.title } </h1>
                <img className={styles.recipeImage} src={ food.image } alt="" /> 
                <div className={styles.recipeDetails}>
                    <span> <strong> ⏱️{food.readyInMinutes} Minutes </strong> </span>
                    <span> 👨‍👩‍👧‍👦<strong>Serves {food.servings} </strong>  </span>
                    <span>  <strong>  {food.vegiterian ? "🥕 Vegiterian" : "🥩 Non-Vegiterian" } </strong>  </span>

                    <span><strong>{food.vegan ? "🐄 Vegan" : ""}</strong> </span> 
                </div> 
                <div>
                    💲<span> <strong> {(food.pricePerServing / 100).toFixed(2) } Per Serving </strong></span>
                </div>
                <h2>Ingredients</h2>
                {food.extendedIngredients.map(
                    (item) => ( 
                        <div>
                            <h3>{item.name}</h3>                         
                        </div>
                    )
                )}

                <h2>Instructions</h2>
                <div className={styles.recipeInstruction}>
                    <ol>
                        {isLoading? <p> Loading ...</p> : food.analyzedInstructions[0].steps.map((step)=> (
                                <li>{step.step}</li>
                            ))}
                    </ol>
                </div>
            </div> 
                       
        </div>
    )
}