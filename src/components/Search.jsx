import { useEffect, useState } from "react";
import styles from './search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '';


export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("pizza"); 

    // Synthax of the useEffect hook.
    useEffect( () => {
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
        
    }, [query])
    //console.log("Food Data After Search", {foodData})

    return (
        <div className={styles.searchcontainer}>
            <input 
                className= {styles.input}
                onChange={(e) => setQuery( e.target.value )}
                value={query} type="text" />
        </div>
    );
}