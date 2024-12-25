import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Meal.module.css"

export default function Meal() {
    const { id } = useParams(); 
    const [meal, setMeal] = useState({
        strMeal: "Loading...",
        strCategory: "",
        strArea: "",
        strInstructions: ""
    });

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals && data.meals.length > 0) {
                    setMeal(data.meals[0]);
                } else {
                    setMeal({
                        strMeal: "Meal not found",
                        strCategory: "",
                        strArea: "",
                        strInstructions: ""
                    });
                }
            })
            .catch(() => {
                setMeal({
                    strMeal: "Error fetching meal",
                    strCategory: "",
                    strArea: "",
                    strInstructions: ""
                });
            });
    }, [id]); 

    return (
        <div className={styles.meal}>
            <div>
                <h1>{meal.strMeal}</h1>
                <p>
                    {meal.strCategory} - {meal.strArea}
                </p>
                <h2>Instructions</h2>
                <div className={styles.instructions}>
                    <p>{meal.strInstructions}</p>
                </div>
                <div className={styles.buttons}>
                    {meal.strSource&&(
                        <a href={meal.strSource} target="_blank" rel="noopener noreferrer" className={styles.detailsButton}>
                            View Source
                        </a>
                    )}
                    {meal.strYoutube&&(
                        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className={`${styles.detailsButton} ${styles.red}`}>
                            Go to Youtube Video
                        </a>
                    )}
                </div>
            </div>
            <img src={meal.strMealThumb} alt='food.png'/>
        </div>
    );
}
