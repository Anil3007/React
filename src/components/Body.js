import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useUserOnline from "../utils/useUserOnline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useUserOnline();

  if (onlineStatus === false) {
    return (<div>Its looks like you are offline.Please check your internet connection</div>)
  } 


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredList.map((restaurant) => (
          <Link to = { "/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
