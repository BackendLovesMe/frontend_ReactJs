import { CDN_URL } from "../Utils/constants";
import { useEffect } from "react";


const ResuturantCard = ({ resData }) => {
    console.log("Restaurant Data:", resData);

    return (
        <div className='res-card'>
            <img className='res-logo' alt='res-logo' src={CDN_URL + resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(', ')}</h4>
            <h4>Estimated Time: {resData.deliveryTime} mins</h4>
            <h4>Rating: {resData.avgRating}</h4>
        </div>
    );
};

export default ResuturantCard;
