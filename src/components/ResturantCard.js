import { CDN_URL } from "../Utils/constants"

const ResuturantCard =(props)=>{
    const {resData}=props
    console.log("Data Check  ",resData)
   // resData=props.resData.restaurants[0]
  // console.log("iam returant name ",resData.restaurants[0])
    return (
        <div className='res-card'>
            <img className='res-logo' alt='res-logo'src={CDN_URL+resData.cloudinaryImageId }></img>
         <h3>{resData.name}</h3><br />
         <h4>{resData.cuisines.join(',')}</h4><br />
         <h4>Estimaetd_Time :{resData.sla.deliveryTime} </h4><br />
         <h4>{resData.avgRating}</h4><br />
        </div>
    )
}

export default ResuturantCard;