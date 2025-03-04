import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import {MENU_API_URL} from '../Utils/constants'


const ResturnatMenu = () => {
  const [resInfo, setResInfo] = useState();
  const {resId}=useParams();// hook use to get params like id and all 
  console.log("✅",(MENU_API_URL+resId))

  useEffect(() => {
    fetchMenu();
  }, []);
   
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        (MENU_API_URL+resId),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXIiOiI3OTg1MjAxMjE4IiwiaWF0IjoxNzQwNjM5MjA4LCJleHAiOjE3NDMyMzEyMDh9.Ehq-8OJfZwI3TcSyt4WbWhps_fDf9IAuD5lclHyHMY4`, // Assuming token is stored in localStorage
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Fetched Data:", data?.data);
      setResInfo(data?.data);

      console.log("State Vairiable ", resInfo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (resInfo === null || resInfo === undefined) return <Shimmer></Shimmer>;
  const menuData = resInfo;

  return (
    <div className="menu">
      <h1>{menuData?.name}</h1>
      <br></br>

      <h2>Menu</h2>
      <ul>
        <li>Average Rating:{menuData?.avgRating}</li>
        <li>Cost for Two:{menuData?.costForTwo}</li>
        <li>
          {menuData?.menu?.map((item) => (
            <li key={item._id}>
              <li>Category:{item.category}</li>
              <li>Name:{item.name}</li>
              <li>Description:{item.description}</li>
              <li>Price: ₹{item.price}</li>
              <li>{item.image}</li>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default ResturnatMenu;
