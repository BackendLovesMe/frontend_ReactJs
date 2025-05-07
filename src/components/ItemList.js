import { useDispatch } from 'react-redux';
import {addItem} from '../Utils/cartSlice'


const ItemList = (items) => {
  // ✅ Destructured 'items' properly
  console.log("Data from ItemList:", items);
  const dispatch=useDispatch()
const handleAddItem = (item) => {
  dispatch(addItem(item)); // item is an array, not a single food item
}
  return (
    <div>
      {items.item.map(
        (
          item // ✅ Fixed arrow function syntax
        ) => (
          <div
            key={item._id}
            className="p-2 m-2 border-gray-500 border-b-1 text-left"
          >
            {" "}
            {/* ✅ Fixed 'key' property */}
            <div className="p-2">
              <span className="font-bold">
                {" "}
                {item.name} {/* Display item name */}
              </span>
              <br />
              <span>₹{item.price}</span>
              <br />
              <span>{item.description}</span>
              <br />
              <button className="AddCart flex justify-between bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ml-auto"
              onClick={()=>handleAddItem(item)}>
              Add+
            </button>
              
            </div>
          
          </div>
          
        )
      )}
    </div>
  );
};

export default ItemList;
