import { useDispatch, useSelector } from "react-redux";
import CartsItemList from "./CartsItemList";
import { clearCart } from "../Utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("🚨❌  Cart Data ", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart text-center m-1 p-10 bg-gray-200 min-h-screen bg-[url('src/assets/subtle-stripes.svg')] bg-repeat">
     <h1 className="cartHeading text-3xl font-extrabold text-gray-800 tracking-wide mb-6">🛒 Cart</h1>

      <div>
        <button
          className="p-2 m-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && (
  <div className="flex justify-center mt-10 bg-gray-50">
  <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md w-80">
    <h1 className="text-2xl font-bold text-gray-700 mb-2 text-center">Your Cart is Empty 🛒</h1>
    <p className="text-gray-500 text-center">Add some items to start shopping!</p>
  </div>
</div>
)}


        <CartsItemList items={cartItems}></CartsItemList>
      </div>
    </div>
  );
};
export default Cart;
