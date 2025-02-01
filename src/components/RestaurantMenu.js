import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Category from "./Category";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    areaName,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  console.log(showIndex)
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="font-bold text-4xl">{name}</h1>
      <div className="w-9/12 bg-gradient-to-b p-4 from-white via-white to-gray-200 rounded-3xl">
        <div className="flex flex-col justify-evenly border-2 bg-white rounded-xl min-h-32 p-5">
          <p className="font-bold">
            {avgRatingString} ({totalRatingsString}) . {costForTwoMessage}
          </p>
          <p className="text-red-500">Pizzas</p>
          <p className="font-bold">
            <span className="text-4xl">.</span> Outlet{" "}
            <span className="font-normal mx-5">{areaName}</span>
          </p>
        </div>
      </div>

      {categories.map((category, index) => (
        <Category
          data={category?.card.card}
          key={index}
          showItem = {showIndex === index ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
