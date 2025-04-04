import { CDN_URL } from "../Utils/constants";
import { useEffect } from "react";


const ResuturantCard = ({ resData }) => {
    console.log("Restaurant Data:", resData);

    return (
        <div className='res-card  h-full bg-gray-150 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col hover:bg-gray-300'>
            <img className='res-logo rounded-2xl' alt='res-logo' src={CDN_URL + resData.cloudinaryImageId} />
            <h3 className='font-bold text-lg '>{resData.name}</h3>
            <h4 className="whitespace-normal text-sm ">{resData.cuisines.join(',')}</h4>
            <h4>Estimated Time: {resData.deliveryTime} mins</h4>
            <h4>Rating: {resData.avgRating}</h4>
        </div>
    );
};
// export const withPromotedLabel= (ResuturantCard) =>{
//     return (props)=>{
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <ResuturantCard {...props} />
//                 </div>
//         )
//     }

//     }
export const withPromotedLabel = (ResuturantCard) => {
    return (props) => {
      return (
        <div className="relative h-full ">
          <label className="absolute top-2 left-2 bg-yellow-400 text-white text-xm px-2 py-1 rounded">
            Promoted
          </label>
          <ResuturantCard {...props} />
        </div>
      );
    };
  };
export default ResuturantCard;
