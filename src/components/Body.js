import ResuturantCard from "./ResturantCard"
import { resList  as initialList} from "../Utils/constants"
import { useState } from "react"

const Body =() =>{
    const [resList,setResList]=useState(initialList)
    return(
        <div className='body'>
            <div className='Search'>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=resList.filter((res)=>{
                       return res.info.avgRating >= 4.6;
                    });
                    setResList(filteredList)
                }}>Most Rated</button>
            </div>
            <div className='res-container'>
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
                  resList.map(resturant=> <ResuturantCard key={resturant.info.id} resData={resturant.info} ></ResuturantCard>)//component must uniquely represent to indetify react with this id 
                }
              
             
               
         
            </div>
         
        </div>
    )
}
export default Body