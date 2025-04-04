import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/constants";
import useResturantMenu from "../Utils/useResturantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResturnatMenu = () => {
  //const [resInfo, setResInfo] = useState();
  const { resId } = useParams(); // hook use to get params like id and all
  const resInfo = useResturantMenu(resId);
  console.log("✅ The console from resturantu Menu fecthing ", resInfo, resId);
  if (resInfo === null || resInfo === undefined) return <Shimmer></Shimmer>;
  const menuData = resInfo;
  const categories = menuData.menu.filter(
    (c) =>
      c["_type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const categoryMap = new Map();
  categories.forEach((item) => {
    if (!categoryMap.has(item.title)) {
      categoryMap.set(item.title, []); // Create a new array for the category
    }
    categoryMap.get(item.title).push(item); // Push items into the corresponding category
  });
  const groupedCategories = Array.from(categoryMap.entries()).map(
    ([title, items]) => ({
      title, // Unique category title
      items, // List of all menu items under this category
    })
  );

  //console.log("menu Category ",categories);
  //console.log("this is my menu data ",menuData.menu)
  return (
    <div className="menu text-center m-10  bg-gray-200 min-h-screen bg-[url('./subtle-stripes.svg')] bg-repeat ">
      <h1 className="Resturant name  font-bold text-2xl">{menuData?.name}</h1>
      <br />

      <h2 className="font-bold text-lg italic">Menu</h2>
      <ul>
        <li>Average Rating: {menuData?.avgRating}</li>
        <li>Cost for Two: {menuData?.costForTwo}</li>
      </ul>
      {/*Categories Accordian */}

      {groupedCategories.map((category, index) => (
        <RestaurantCategory key={index} data={category}></RestaurantCategory>
      ))}
    </div>
  );
};
export default ResturnatMenu;
