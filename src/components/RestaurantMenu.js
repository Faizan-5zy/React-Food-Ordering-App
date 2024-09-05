
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
// 11






// 8 optimizing app 

// import { useEffect, useState } from "react";
// import { MENU_URL } from "../../utils/constants";


const RestaurantMenu = () => {
//   const [resInfo, setresInfo] = useState(null);

  const params = useParams();

  const dummy = 'Dummy data'

  const { resId } = useParams();

// custom hook 
  const resInfo = useRestaurantMenu(resId)

  const [showIndex,setShowIndex] = useState(null)

// const {name} = resInfo?.cards[2]?.card?.card?.info

  const name = resInfo?.cards[2]?.card?.card?.info?.name;
  const costForTwoMessage =
    resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
  const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;

  // const itemCards =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

      const itemCards = resInfo
      // console.log("itemCards:", itemCards)

      // console.log('itemCards',resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

// 11
      const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      })

      // const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
      //   return c.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      // })

    
      



  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
     
      
      {/* // controlled component 11 */}
      {categories.map((category,index)=>{
        // console.log('category',category)

        // lifting state up 11 , passing state as prop and passing function as prop
        return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index === showIndex ? null : index)}  dummy={dummy} />
      })}

    </div>
  );
};

export default RestaurantMenu;