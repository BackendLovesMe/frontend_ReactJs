import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {// login to create accordian hide and show
    setShowItem(!showItem)
  };

  //console.log("See this is the props Data iam getting", data.items);
  return (
    <div>
      {/* Accordian Header */}
      <div className="Accordian w-6/12  mx-auto my-4 bg-gray-100 shadow-lg p-3 ">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="accordian_item font-bold text-lg ">
            {data.title} ({data.items.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList item={data.items}></ItemList>}
      </div>
      {/* Accordian body */}
      {/* <ItemList>categor</ItemList> */}
    </div>
  );
};

export default RestaurantCategory;
