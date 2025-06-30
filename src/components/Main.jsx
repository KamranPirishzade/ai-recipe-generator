import React from 'react'
import styles from "./Main.module.css"
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <main>
    <div>
      <div className={styles.carouselContainer}>
  <ReactSimplyCarousel
    activeSlideIndex={activeSlideIndex}
    onRequestChange={setActiveSlideIndex}
    itemsToShow={1}
    itemsToScroll={1}
    forwardBtnProps={{
      className: styles.reactSimplyCarousel_forwardBtn,
      children: <span>{`>`}</span>,
    }}
    backwardBtnProps={{
      className: styles.reactSimplyCarousel_backwardBtn,
      children: <span>{`<`}</span>,
    }}
    speed={400}
    easing="linear" 
  >
         <div className={styles.mainDiv}>
             <div className={styles.text}>
                 <h1>Cook.<br/> Create.<br/> Enjoy.</h1>
                 <p>Unleash your inner chef with personalized recipes, powered by AI. From quick meals to gourmet dishes, we turn your ingredients into magic.</p>
             </div>
             <div className={styles.mainPhoto}>
             <img  src={`${process.env.PUBLIC_URL}/imgs/main/carusel.avif`} alt='main1.png'/>
             </div>
         </div>
         <div className={styles.mainDiv}>
            <div className={styles.text}>
            <h1>Discover.<br/> Savor.<br/> Share.</h1>
            <p>Embark on a culinary journey with recipes tailored to your taste. Whether you're hosting a dinner or craving comfort food, we've got you covered.</p>
            </div>
            <div className={styles.mainPhoto}>
            <img  src={`${process.env.PUBLIC_URL}/imgs/main/carusel-2.avif`} alt='main2.png'/>
            </div>
        </div>
        </ReactSimplyCarousel>

    </div>
    <div className={styles.aiSection}>
        <div className={styles.aiText}>
        <p>Ready to explore custom recipes tailored just for you? Let our AI Recipe Maker turn your ingredients into culinary masterpieces.</p>
        <button
          className={styles.aiButton}
          onClick={() => navigate('/ai-recipe-maker')}
        >
          Try AI Recipe Maker
        </button>
        </div>
          <img className={styles.aiPhoto} src={`${process.env.PUBLIC_URL}/imgs/main/ai-recipe.avif`} alt="ai_recipe.png" />


      </div>
      <div className={styles.catalog}>
        <div className={styles.catalogImage}>
          <img src={`${process.env.PUBLIC_URL}/imgs/main/explore-catalog.webp`} alt='catalog.jpg'/>
        </div>
      <div className={styles.catalogText}>
          <h2>Explore Our Catalog</h2>
          <p>Discover a wide range of recipes to suit any taste and occasion. From appetizers to desserts, there's something for everyone!</p>
            <button onClick={() => navigate('/meals')} className={styles.catalogButton}>
              Go to Catalog
            </button>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Main;