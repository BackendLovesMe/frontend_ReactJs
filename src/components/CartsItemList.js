
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';

const CartsItemList = ({ items }) => {
  console.log("Data from CartsItemList:", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); 
  };

  return (
    <div className=" space-y-4 items-center justify-center ">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto"
        >
          <div className="p-4 mt-1 bg-gray-200 ">
            <span className="text-xl font-bold mb-2">{item.name}</span>
            <br />
            <span className="text-gray-700 mb-1">₹{item.price}</span>
            <br />
            <p className="text-gray-500 text-sm">{item.description}</p>
            <br />
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartsItemList;
