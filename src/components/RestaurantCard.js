import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => { 
    // console.log(props);
    const {resData} = props
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="restaurant-img"
          src={
            CDN_URL+
            resData.info.cloudinaryImageId}
        />
        <h3 className="res-title">{resData.info.name}</h3>
        <h4 className="res-cuisine">Cuisines :{resData.info.cuisines.join(', ')}</h4>
        <h4 className="res-costForTwo">Price : {resData.info.costForTwo}</h4>
        <h4 className="res-deliveryTime">Area : {resData.info.locality}</h4>
        <h4 className="res-avgRating">Rating : {resData.info.avgRating}</h4>
        <h4 className="res-avgRating">id : {resData.info.id}</h4>
      </div>
    );
  };

export default RestaurantCard;
