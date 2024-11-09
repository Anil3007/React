import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  
  const [listOfRestaurant,setListOfRestaurant] = useState(resData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
