import React, { useState,useEffect} from 'react'
import styles from "./List.module.css"

export default function List() {
    const [fav,setFav]=useState([])

    useEffect(() => {
        const savedFav = JSON.parse(localStorage.getItem('favourites')) || [];
        setFav(savedFav);
      }, []);

    const goDetailsPage=(meal)=>{
        window.location.href = '/meals/' + meal.idMeal;
    }

  return (
    <div className={styles.list}>
        <h1>Favourite meals</h1>
        <div className={styles.listItems}>
        {fav.length > 0 ? (
        fav.map((meal) => (
          <div key={meal.idMeal} className={styles.listItem}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className={styles.mealText}>
            <h3>{meal.strMeal}</h3>
            <p>{meal.strCategory}</p>
            <button className={styles.detailsButton} onClick={()=>goDetailsPage(meal)}>
            Details
            </button>   
            </div>        
          </div>
        ))
      ) : (
        <p>No favorite meals added yet!</p>
      )}
    </div>
    </div>
  )
}
