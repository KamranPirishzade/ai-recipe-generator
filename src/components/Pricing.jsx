import React, { useState } from 'react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(null);
  const [res,setRess]=useState("")


  const promoCodes = {
    cook30: 30, 
    recipe30: 30,
    firsttime20: 20, 
  };

  const useCode = () => {
    const discountValue = promoCodes[promo.toLowerCase()];
    if (discountValue) {
      setDiscount(discountValue);
      setRess(`Promo code applied! Discount: ${discountValue}%`);
    } else {
      setDiscount(null);
       setRess("Invalid promo code!") 
    }
  };

  const calculateDiscountedPrice = (price) => {
    if (discount) {
      return (price - (price * discount) / 100).toFixed(2);
    }
    return price.toFixed(2);
  };

  return (
    <div className={styles.pricingContainer}>
      <h1>Our Pricing Plans</h1>
      <div className={styles.promoInput}>
        <input
          onChange={(e) => setPromo(e.target.value)}
          placeholder="Enter promo code"
          value={promo}
          type="text"
        />
        <button onClick={useCode}>Use</button>
        <p>{res}</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.pricingCard}>
          <h2>Free Plan</h2>
          <p>$0/month</p>
          <ul>
            <li>Feature 1: Limited Access</li>
            <li>Feature 2: Basic Support</li>
            <li>Feature 3: 100 API Calls</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className={styles.pricingCard}>
          <h2>Medium Plan</h2>
          <div>
          <p className={discount ? styles.lined : ''}>
            $14.99/month
          </p>

          {discount && (
            <p className={styles.discounted}>
              ${calculateDiscountedPrice(14.99)}/month
            </p>
          )}
        </div>
          <ul>
            <li>Feature 1: 1000 API Calls</li>
            <li>Feature 2: Custom Reports</li>
            <li>Feature 3: Recipe Modifications</li>
            <li>Feature 4: No Ads</li>
          </ul>
          <button>Subscribe Now</button>
        </div>

        <div className={styles.pricingCard}>
          <h2>Premium Plan</h2>
          <div>
          <p className={discount ? styles.lined : ''}>
            $29.99/month
          </p>
          {discount && (
            <p className={styles.discounted}>
              ${calculateDiscountedPrice(29.99)}/month
            </p>
          )}
          </div>
          <ul>
            <li>Feature 1: All Features</li>
            <li>Feature 2: Unlimited API Calls</li>
            <li>Feature 3: Advanced AI Technology</li>
            <li>Feature 4: Image Generator (Beta)</li>
            <li>Feature 5: Early Feature Access</li>
          </ul>
          <button>Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}