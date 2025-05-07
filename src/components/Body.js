import ResuturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [SearchText, setSearchText] = useState(""); //state varibale
  const PromotedResutrants = withPromotedLabel(ResuturantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1.0/fetchAllResturant",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXIiOiI3OTg1MjAxMjE4IiwiaWF0IjoxNzQ0MDE2ODI0LCJleHAiOjE3NDY2MDg4MjR9.SjSPKQqfivAZDSY1nB78nbj5XZ3qyAAEObKUnx3WByM`, // Assuming token is stored in localStorage
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResList(data.data);
      setFilteredResturant(data.data);
      console.log("Fetched Data:", data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; // fetching rest api for resturant
  //   if(resList.length ===0){
  //     return  <Shimmer />
  //   }
  //checking and sending shimmer ui if something went wrong
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus == false)
    return <h1>Looks like you are offline check your internet</h1>;
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-200 min-h-screen bg-[url('src/assets/subtle-stripes.svg')] bg-repeat ">
      <div className="filter flex items-center justify-center mt-4">
        <div className="Search m-4 p-4 ">
          <input
            type="text"
            className="search-box px-2 py-1 border border-black rounded-md focus:outline-none focus:border-blue-500"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-yellow-600 text-white px-3 py-2 rounded ml-2 mt-7  h-10"
            onClick={() => {
              const fiteredList = resList.filter((res) =>
                res.name.toLowerCase().includes(SearchText.toLocaleLowerCase())
              );
              setFilteredResturant(fiteredList);

              //console.log(SearchText,resList,fiteredList)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-yellow-600 text-white px-4 py-0.5 rounded-md ml-0.5 h-9 mt-7 "
          onClick={() => {
            // filter most reated
            const filteredList = resList.filter((res) => {
              return res.avgRating >= 4.6;
            });
            setFilteredResturant(filteredList);
          }}
        >
          Most Rated
        </button>
      </div>

      <div className="res-container text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {/* <ResuturantCard resData={resObj.restaurants[0].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[1].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[2].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[3].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[4].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[5].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[6].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[7].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[8].info} ></ResuturantCard>
                <ResuturantCard resData={resObj.restaurants[9].info} ></ResuturantCard> */}
        {
          filteredResturant.map((resturant) => (
          
            <Link key={resturant._id} to={"/resturants/" + resturant._id}>
             
              {resturant['promoted'] ? (
                <PromotedResutrants resData={resturant} />
              ) : (
                <ResuturantCard resData={resturant} />
              )}
            </Link>
           
          )) //component must uniquely represent to indetify react with this id
        }
      </div>
    </div>
  );
};
export default Body;
