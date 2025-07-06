import React from "react";
import "./Airbnb.css";
import hotel1 from '../../assets/images/hotel1.jpg'
import hotel2 from '../../assets/images/hotel2.jpg'
import hotel3 from '../../assets/images/hotel3.jpg'
import hotel4 from '../../assets/images/hotel4.jpg'


const listings = [
  {
    location: "Blankenberge, Belgium",
    description: "Beach and sea views",
    dates: "Jul 2 – 9",
    price: "€ 278 night",
    rating: 4.94,
    image: hotel1,
  },
  {
    location: "Zandvoort, Netherlands",
    description: "Beach and ocean views",
    dates: "Aug 22 – 27",
    price: "€ 492 night",
    rating: 4.92,
    image: hotel2,
  },
  {
    location: "Beernem, Belgium",
    description: "170 kilometers away",
    dates: "Jan 8 – 13",
    price: "€ 1,405 night",
    rating: 4.95,
    image: hotel3,
  },
  {
    location: "De Panne, Belgium",
    description: "Beach and sea views",
    dates: "Aug 21 – 26",
    price: "€ 452 night",
    rating: 4.99,
    image: hotel4,
  },
];

const categories = [
  "Icons",
  "Countryside",
  "Beachfront",
  "Amazing views",
  "Containers",
  "Top of the world",
  "Pools",
  "Tiny homes",
  "Cabins",
  "Castles",
  "Parks",
  "OMG!",
];

export default function Airbnb() {
  return (
    <div className="airbnb-container">
      <header className="airbnb-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Airbnb"
          className="airbnb-logo"
        />

        <div className="search-bar">
          <input placeholder="Where" />
          <input placeholder="Check in" />
          <input placeholder="Check out" />
          <input placeholder="Who" />
          <button className="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="blue"
              viewBox="0 0 24 24"
            >
              <path d="M21 20l-5.929-5.929A6.471 6.471 0 0 0 18 9.5 6.5 6.5 0 1 0 9.5 16a6.471 6.471 0 0 0 4.571-1.929L20 21l1-1zM4 9.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="category-bar">
        {categories.map((cat, idx) => (
          <div
            className={`category-item ${cat === "Amazing views" ? "active" : ""}`}
            key={idx}
          >
            {cat}
          </div>
        ))}
        <button className="filter-btn">Filters</button>
      </div>

      <div className="listing-grid">
        {listings.map((item, idx) => (
          <div className="listing-card" key={idx}>
            <div className="listing-image">
              <img src={item.image} alt={item.location} />
              <div className="favorite-label">Guest favorite</div>
              <div className="heart-icon">♡</div>
            </div>
            <div className="listing-info">
              <div className="location">{item.location}</div>
              <div className="description">{item.description}</div>
              <div className="dates">{item.dates}</div>
              <div className="price-rating">
                <span className="price">{item.price}</span>
                <span className="rating">★ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}