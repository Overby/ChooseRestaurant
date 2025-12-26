'use client';

import { useState } from 'react';
import { restaurants, Restaurant } from '@/data/restaurants';
import Wheel from '@/components/Wheel';
import styles from './page.module.css';

export default function Home() {
  const [cuisine, setCuisine] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [recommendation, setRecommendation] = useState<Restaurant | null>(null);
  const [showResult, setShowResult] = useState(false);

  const getFilteredRestaurants = (): Restaurant[] => {
    return restaurants.filter((restaurant) => {
      // Cuisine matching
      const cuisineMatch = !cuisine || cuisine === 'Other' 
        ? restaurant.cuisine !== 'Italian' && restaurant.cuisine !== 'Mexican' && restaurant.cuisine !== 'Thai' && restaurant.cuisine !== 'Japanese'
        : restaurant.cuisine === cuisine;
      
      // Cost matching
      const costMatch = !cost || restaurant.cost === cost;
      
      // Location matching - map Downtown/Central to appropriate regions
      let locationMatch = true;
      if (location) {
        if (location === 'East') {
          locationMatch = restaurant.location === 'East' || restaurant.location === 'Downtown';
        } else if (location === 'West') {
          locationMatch = restaurant.location === 'West' || restaurant.location === 'Central';
        } else {
          locationMatch = restaurant.location === location;
        }
      }
      
      return cuisineMatch && costMatch && locationMatch;
    });
  };

  const handleSpin = () => {
    if (!cuisine || !cost || !location) {
      alert('Please select all three options before spinning!');
      return;
    }

    const filtered = getFilteredRestaurants();
    
    if (filtered.length === 0) {
      alert('No restaurants match your criteria. Please try different selections!');
      return;
    }

    setIsSpinning(true);
    setShowResult(false);
    setRecommendation(null);

    // Spin for 2-3 seconds
    const spinDuration = 2000 + Math.random() * 1000;
    
    setTimeout(() => {
      // Randomly select from filtered restaurants
      const randomIndex = Math.floor(Math.random() * filtered.length);
      const selected = filtered[randomIndex];
      
      setRecommendation(selected);
      setIsSpinning(false);
      
      // Show result after a brief delay
      setTimeout(() => {
        setShowResult(true);
      }, 300);
    }, spinDuration);
  };

  const handleReset = () => {
    setCuisine('');
    setCost('');
    setLocation('');
    setRecommendation(null);
    setShowResult(false);
    setIsSpinning(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Can't Decide Where to Eat?</h1>
          <p className={styles.subtitle}>
            Girlfriend can't decide where to eat? Here you go! 🎡
          </p>
        </header>

        <div className={styles.splitContainer}>
          {/* Left Side - User Input */}
          <div className={styles.leftPanel}>
            {!showResult ? (
              <div className={styles.selectionContainer}>
                <div className={styles.selectGroup}>
                  <label htmlFor="cuisine" className={styles.label}>
                    1. Type of Cuisine
                  </label>
                  <select
                    id="cuisine"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className={styles.select}
                    disabled={isSpinning}
                  >
                    <option value="">Select cuisine...</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Thai">Thai</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className={styles.selectGroup}>
                  <label htmlFor="cost" className={styles.label}>
                    2. Desired Cost
                  </label>
                  <select
                    id="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    className={styles.select}
                    disabled={isSpinning}
                  >
                    <option value="">Select cost...</option>
                    <option value="$">$ - Budget Friendly</option>
                    <option value="$$">$$ - Moderate</option>
                    <option value="$$$">$$$ - Fine Dining</option>
                  </select>
                </div>

                <div className={styles.selectGroup}>
                  <label htmlFor="location" className={styles.label}>
                    3. Location in Austin
                  </label>
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={styles.select}
                    disabled={isSpinning}
                  >
                    <option value="">Select location...</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East (includes Downtown)</option>
                    <option value="West">West</option>
                  </select>
                </div>

                <button
                  onClick={handleSpin}
                  className={styles.spinButton}
                  disabled={!cuisine || !cost || !location || isSpinning}
                >
                  {isSpinning ? 'Spinning...' : 'Spin the Wheel! 🎡'}
                </button>
              </div>
            ) : (
              recommendation && (
                <div className={styles.resultContainer}>
                  <div className={styles.resultCard}>
                    <h2 className={styles.resultTitle}>Your Restaurant is...</h2>
                    <h3 className={styles.restaurantName}>{recommendation.name}</h3>
                    <div className={styles.restaurantDetails}>
                      <p>
                        <span className={styles.detailLabel}>Cuisine:</span>{' '}
                        {recommendation.cuisine}
                      </p>
                      <p>
                        <span className={styles.detailLabel}>Cost:</span>{' '}
                        {recommendation.cost}
                      </p>
                      <p>
                        <span className={styles.detailLabel}>Location:</span>{' '}
                        {recommendation.location}
                      </p>
                    </div>
                    <a
                      href={recommendation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.websiteLink}
                    >
                      Visit Restaurant Website →
                    </a>
                    <button onClick={handleReset} className={styles.resetButton}>
                      Try Again
                    </button>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right Side - Wheel */}
          <div className={styles.rightPanel}>
            <div className={styles.wheelContainer}>
              <Wheel isSpinning={isSpinning} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

