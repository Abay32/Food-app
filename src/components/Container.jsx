import styles from "./container.module.css"
export default function Container({children}){
    //structural container
    return (
        <div className={styles.parentContainer}>
            {children}
        </div>
    )
}