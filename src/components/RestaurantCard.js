import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[220px] bg-gray-100">
      <img
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo rounded-lg"
      />
      <h3 className="font-bold py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;