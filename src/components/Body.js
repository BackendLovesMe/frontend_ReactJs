import ResuturantCard from "./ResturantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [SearchText, setSearchText] = useState(""); //state varibale

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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXIiOiI3OTg1MjAxMjE4IiwiaWF0IjoxNzQwNjM5MjA4LCJleHAiOjE3NDMyMzEyMDh9.Ehq-8OJfZwI3TcSyt4WbWhps_fDf9IAuD5lclHyHMY4`, // Assuming token is stored in localStorage
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResList(data.data);
      setFilteredResturant(data.data)
      console.log("Fetched Data:", data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; // fetching rest api for resturant
  //   if(resList.length ===0){
  //     return  <Shimmer />
  //   }
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
          className="filter-btn"
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

      <div className="res-container">
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
           
            <Link key={resturant.id} to={'/resturants/'+resturant._id}>
            <ResuturantCard
              
              resData={resturant}
            ></ResuturantCard>
            </Link>
          )) //component must uniquely represent to indetify react with this id
        }
      </div>
    </div>
  );
};
export default Body;
