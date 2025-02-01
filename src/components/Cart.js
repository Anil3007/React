
import ItemsList from "./ItemsList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(clearCart())
  }

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <div className="text-center">
          <h1 className="text-5xl font-bold my-4">Your cart</h1>
          <button className="bg-black text-white py-2 px-4 rounded-md" onClick={handleClick}>Clear Button</button>
        </div>
        {items.length === 0 ? (
          <h1 className="text-center text-3xl font-bold my-4">
            Your cart is empty
          </h1>
        ) : (
          <ItemsList items={items} />
        )}
      </div>
    </div>
  );
};

export default Cart;
