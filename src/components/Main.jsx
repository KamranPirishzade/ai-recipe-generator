import React from 'react'
import styles from "./Main.module.css"
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function Main() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
             <img  src='https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='main.png'/>
             </div>
         </div>
         <div className={styles.mainDiv}>
            <div className={styles.text}>
            <h1>Discover.<br/> Savor.<br/> Share.</h1>
            <p>Embark on a culinary journey with recipes tailored to your taste. Whether you're hosting a dinner or craving comfort food, we've got you covered.</p>
            </div>
            <div className={styles.mainPhoto}>
            <img  src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='main.png'/>
            </div>
        </div>
        </ReactSimplyCarousel>

    </div>
    <div className={styles.aiSection}>
        <div className={styles.aiText}>
        <p>Ready to explore custom recipes tailored just for you? Let our AI Recipe Maker turn your ingredients into culinary masterpieces.</p>
        <button
          className={styles.aiButton}
          onClick={() => window.location.href = '/ai-recipe-maker'}
        >
          Try AI Recipe Maker
        </button>
        </div>
          <img className={styles.aiPhoto} src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ai_recipe.png" />


      </div>
      <div className={styles.catalog}>
        <div className={styles.catalogImage}>
          <img src='https://th-thumbnailer.cdn-si-edu.com/nhEMcXmHIiMWBfKMirhyVp2kOIM=/fit-in/1600x0/filters:focal(800x602:801x603)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/2d/20/2d209ecc-c4cf-40dc-85c2-45ec0c84c402/food-booklist-v1.jpg' alt='catalog.jpg'/>
        </div>
      <div className={styles.catalogText}>
          <h2>Explore Our Catalog</h2>
          <p>Discover a wide range of recipes to suit any taste and occasion. From appetizers to desserts, there's something for everyone!</p>
            <button onClick={() => window.location.href = '/meals'} className={styles.catalogButton}>
              Go to Catalog
            </button>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Main;