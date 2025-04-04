import { useEffect, useState } from "react"
import {MENU_API_URL} from './constants'

const useResturantMenu =(resId)=>{//custom hook 
    const[resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fectData()
    },[]);

    const fectData = async () => {
       try {
         const response = await fetch(
           (MENU_API_URL+resId),
           {
             method: "GET",
             headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXIiOiI3OTg1MjAxMjE4IiwiaWF0IjoxNzQxNDIyNjUxLCJleHAiOjE3NDQwMTQ2NTF9.-cpouPH5feJqEf18yrng1iNRY5CibYsSfoM0jtf5VMk`, // Assuming token is stored in localStorage
             },
           }
         );
   
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
   
         const data = await response.json();
   
         console.log("Fetched Data from custom hook :", data?.data);
         setResInfo(data?.data);// setting data to res_info  state variable
         console.log("State Vairiable ", resInfo);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
       console.log('ResInfo this is  from custom hook ',resInfo)
        
      // return resInfo
     };
     useEffect(() => {
        console.log("🔥 Updated resInfo in state:", resInfo);
      }, [resInfo]);
    
      return resInfo;
}
export default useResturantMenu

