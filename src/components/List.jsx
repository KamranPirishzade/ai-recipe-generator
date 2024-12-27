import React, { useState,useEffect} from 'react'
import styles from "./List.module.css"
import { useNavigate } from 'react-router-dom';

export default function List() {
    const [fav,setFav]=useState([])
    const [search,setSearch]=useState("")
    const [isLoading,setIsLoading]=useState(false)

    useEffect(() => {
      const fetchFavorites = () => {
        const savedFav = JSON.parse(localStorage.getItem("favourites")) || [];
        const filteredFav = search.trim()
          ? savedFav.filter((meal) =>
              meal.strMeal.toLowerCase().includes(search.toLowerCase())
            )
          : savedFav;
          if (JSON.stringify(filteredFav) !== JSON.stringify(fav)) {
          setIsLoading(true);
          setTimeout(() => {
            setFav(filteredFav);
            setIsLoading(false);
          }, 300); 
        }
      }    

      fetchFavorites();
    },[search]);

    const navigate = useNavigate();

    const goDetailsPage=(meal)=>{
      navigate(`/meals/${meal.idMeal}`);
    }

    const removeFavorite = (mealId) => {
      const updatedFav = fav.filter((meal) => meal.idMeal !== mealId);
      setFav(updatedFav);
      localStorage.setItem("favourites", JSON.stringify(updatedFav));
    };

  return (
    <div className={styles.list}>
        <h1>Favourite meals</h1>
        <div className={styles.searchDiv}>
        <img  src='https://img.icons8.com/ios7/512/search.png' alt='search-icon'/>
          <input onChange={(e)=>setSearch(e.target.value)} value={search} className={styles.search} type='text' placeholder='Looking for...'/>
        </div>
        <div className={styles.listItems}>
        {isLoading ? (
          <div className={styles.spinner}></div>
        ):fav.length > 0 ? (
        fav.map((meal) => (
          <div key={meal.idMeal} className={styles.listItem}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className={styles.mealText}>
            <h3>{meal.strMeal}</h3>
            <p>{meal.strCategory}</p>
            <div className={styles.buttons}>
            <button className={styles.detailsButton} onClick={()=>goDetailsPage(meal)}>
            Details
            </button> 
            <button
                  className={styles.removeButton}
                  onClick={() => removeFavorite(meal.idMeal)}
                >
                  Remove
                </button>
            </div>  
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
