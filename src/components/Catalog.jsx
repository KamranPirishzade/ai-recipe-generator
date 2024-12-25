import React, { useState, useEffect } from 'react';
import styles from './Catalog.module.css';

const Catalog = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(false);
  const [more, setMore] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [search,setSearch]=useState("")
  const [searched,setSearched]=useState(false)


  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favourites'));
    if (savedFavs) setFavourites(savedFavs);
  }, []);
  
  useEffect(() => {
    if(favourites?.length) {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
  }, [favourites]);

  const fetchRandomMeals = async (count = 10) => {
    try {
      setLoading(true);
      const mealPromises = Array.from({ length: count }, () =>
        fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(res => res.json())
      );

      const mealResults = await Promise.all(mealPromises);
      setMeals(mealResults.map(result => result.meals[0]));
    } catch (error) {
      console.error('Error fetching random meals:', error);
    } finally {
      setLoading(false);
      setMore(true);
    }
  };

  const addMoreMeal = async (count = 5) => {
    try {
      setMoreLoading(true);
      const mealPromises = Array.from({ length: count }, () =>
        fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(res => res.json())
      );

      let mealResults = await Promise.all(mealPromises);
      mealResults = mealResults.map(result => result.meals[0]);
      setMeals(prevMeals => [...prevMeals, ...mealResults]);
    } catch (error) {
      console.error('Error fetching random meals:', error);
    } finally {
      setMoreLoading(false);
    }
  };


  const addMoreItems = () => {
    addMoreMeal();
  };

  const toggleFavourite = (meal) => {
    if (favourites.some(fav => fav.idMeal === meal.idMeal)) {
      setFavourites(favourites.filter(fav => fav.idMeal !== meal.idMeal));
    } else {
      setFavourites([...favourites, meal]);
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  // const showSearch=()=>{
  //   if(search.trim()!=""){
  //     try {
  //       setMoreLoading(true);
  //       const mealPromises = Array.from({ length: count }, () =>
  //         fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(res => res.json())
  //       );
  
  //       let mealResults = await Promise.all(mealPromises);
  //       mealResults = mealResults.map(result => result.meals[0]);
  //       setMeals(prevMeals => [...prevMeals, ...mealResults]);
  //     } catch (error) {
  //       console.error('Error fetching random meals:', error);
  //     }
  //   }else{

  //   }
  // }

  return (
    <div className={styles.catalog}>
      <h1>Random Meal Catalog</h1>
      <div className={styles.searchDiv}>
        <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Looking for..'/>
        <button onClick={showSearch}><img src='https://img.icons8.com/ios7/512/search.png'/></button>
        {/* <button>{"->"}</button> */}
      </div>
      {loading ? (
        <div className={styles.spinner}></div>
      ) : (
        <div className={styles.mealGrid}>
          {meals.map(meal => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              isFavourite={favourites.some(fav => fav.idMeal === meal.idMeal)}
              toggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}
      {moreLoading && <div className={styles.spinner}></div>}
      {more && (
        <button className={styles.moreBtn} onClick={addMoreItems}>
          More...
        </button>
      )}
    </div>
  );
};

const MealCard = ({ meal, isFavourite, toggleFavourite }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const goDetailsPage = () => {
    window.location.href = '/meals/' + meal.idMeal;
  };

  return (
    <div className={styles.mealCard}>
      {!imageLoaded && <div className={styles.imagePlaceholder}></div>}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={`${styles.mealImage} ${imageLoaded ? '' : styles.hidden}`}
        onLoad={() => setImageLoaded(true)}
      />
      <h3>{meal.strMeal}</h3>
      <p>{meal.strCategory}</p>
      <div className={styles.buttons}>
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => toggleFavourite(meal)}
        >
          <span
            style={{
              fontSize: '24px',
              color: isFavourite ? '#f44336' : '#ccc',
              transition: 'color 0.3s ease',
            }}
          >
            ♥
          </span>
        </button>
        <button className={styles.detailsButton} onClick={goDetailsPage}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Catalog;