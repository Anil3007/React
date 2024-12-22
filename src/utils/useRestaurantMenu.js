import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  console.log("custome hook called")
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("use effect called")
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  }

  return resInfo;
};

export default useRestaurantMenu;
