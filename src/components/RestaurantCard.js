import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => { 
    // console.log(props);
    const {resData} = props
    const {loggedInUser} = useContext(UserContext)

    return (
      
      <div className="m-4 p-4 w-[200px]  bg-red-400 rounded">
        <img
          className="res-logo rounded"
          alt="restaurant-img"
          src={
            CDN_URL+
            resData.info.cloudinaryImageId}
        />
        <h4 className="res-avgRating">id : {resData.info.id}</h4>
        <h3 className="font-bold py-2 px-1 text-lg ">{resData.info.name}</h3>
        <h4 className="res-cuisine">Cuisines :{resData.info.cuisines.join(', ')}</h4>
        <h4 className="res-costForTwo">Price : {resData.info.costForTwo}</h4>
        <h4 className="res-deliveryTime">Area : {resData.info.locality}</h4>
        <h4 className="res-avgRating">Rating : {resData.info.avgRating}</h4>
        <h4 >User : {loggedInUser}</h4>
      </div>
    );
  };


  //11 higher order component 

export const withPromotedLabel = (RestaurantCard) => {
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-black text-white p-1 margin-1 rounded">Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  }

export default RestaurantCard;
