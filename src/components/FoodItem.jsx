import styles from './fooditem.module.css';
export default function FoodItem({setFoodId, food}){
    return (
        <div className={styles.itemContainer} >
            <img className={styles.itemImage} src={food.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div> 
            <div onClick={()=>{setFoodId(food.id)}} className={styles.buttonContainer}>
                <button className={styles.itemButton} >Veiw Recipe</button>
            </div>
            
        </div>
    )
}