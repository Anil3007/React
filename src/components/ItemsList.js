import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";




const ItemsList = ({ items }) => {
  const dispatch = useDispatch()

  const handleClick = (item)=>{
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between my-5"
        >
          <div className="pr-5 w-9/12">
            <div className="py-2">
              <p className="font-bold">{item.card.info.name}</p>
              <p> ₹{item.card.info.defaultPrice / 100}</p>
              <p> {item.card.info.description} </p>
            </div>
          </div>
          <div>
            <img src={CDN_URL + item.card.info.imageId} className="w-40" />
            <button className="relative bottom-14 left-12 bg-black text-white px-6 py-2 rounded-md" onClick={()=>handleClick(item)}> Add </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
