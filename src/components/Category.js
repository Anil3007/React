import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemsList from "./ItemsList";

const Category = ({ data, showItem , setShowIndex}) => {
  const itemCards = data.itemCards;
  const handleClick = () =>{
    setShowIndex()
  }
  return (
    <div
      className="w-9/12 border-b-2 py-5 shadow-lg px-5"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <h1 className="font-bold">
          {data.title} ({itemCards.length})
        </h1>
        {showItem ? <button>Collapse</button> : <button>Expand</button>}
      </div>
      {showItem && <ItemsList items={itemCards} />}
    </div>
  );
};

export default Category;
