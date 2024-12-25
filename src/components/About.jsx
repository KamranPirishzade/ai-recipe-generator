import React from 'react'
import styles from "./About.module.css"

export default function About() {
  return (
        <div>
            <div className={styles.aboutContainer}>
    <section className={styles.hero}>
        <h1>About Us</h1>
        <p>We are passionate about delivering the best recipes and culinary experiences to food lovers around the world. Our mission is to inspire your cooking journey.</p>
    </section>

    <section className={styles.missionVision}>
        <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>To empower home cooks and food enthusiasts by providing an extensive library of recipes, easy-to-follow guides, and a community of like-minded individuals.</p>
        </div>
        <div className={styles.vision}>
        <h2>Our Vision</h2>
        <p>To become the go-to platform for anyone who loves cooking and exploring new cuisines.</p>
        </div>
    </section>

    <section className={styles.team}>
        <h2>Meet the Team</h2>
        <div className={styles.teamMembers}>
        <div className={styles.member}>
            <img src="https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds" alt="Team Member 1"/>
            <h3>John Doe</h3>
            <p>Founder & Head Chef</p>
        </div>
        <div className={styles.member}>
            <img src="https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*" alt="Team Member 2"/>
            <h3>Jane Smith</h3>
            <p>Recipe Developer</p>
        </div>
        <div className={styles.member}>
            <img src="https://assetsio.gnwcdn.com/kojima_Zhtk9WV.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webps" alt="Team Member 3"/>
            <h3>Emily Brown</h3>
            <p>Community Manager</p>
        </div>
        </div>
    </section>

    <section className={styles.testimonials}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonial}>
        <p>"This platform has transformed my cooking skills. The recipes are simple yet innovative!"</p>
        <h4>- Sarah Lee</h4>
        </div>
        <div className={styles.testimonial}>
        <p>"I love the diverse recipes! The site is easy to use, and I always discover something new."</p>
        <h4>- Michael Chang</h4>
        </div>
    </section>

    <section className={styles.cta}>
        <h2>Join Our Community</h2>
        <p>Be part of a thriving community of food enthusiasts. Share your recipes, learn from others, and take your cooking to the next level.</p>
        <button>Sign Up Now</button>
    </section>
    </div>
    </div>
  )
}
