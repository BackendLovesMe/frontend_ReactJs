import { CDN_URL } from "../Utils/constants";
// const ItemList=(items)=>{
//     console.log("Data from Item list",items)
//     return (
//        <div>
//         {items.item.map(item) => (
//             <div key=>{item._id}>

//             </div>
//         )}
//        </div>
//     )
// }

// export default ItemList
const ItemList = (items) => {
  // ✅ Destructured 'items' properly
  console.log("Data from ItemList:", items);

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
              <button className="AddCart flex justify-between bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ml-auto">
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
