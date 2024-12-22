import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("about to return render")
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <div>
        <p>
          {avgRatingString}({totalRatingsString}) . {costForTwoMessage}
        </p>
      </div>
      <ul>
        <li>{cuisines}</li>
        <li>
          <img src={cloudinaryImageId} />
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
