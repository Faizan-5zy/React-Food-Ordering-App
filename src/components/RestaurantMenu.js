import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

// 8 optimizing app 

// import { useEffect, useState } from "react";
// import { MENU_URL } from "../../utils/constants";


const RestaurantMenu = () => {
//   const [resInfo, setresInfo] = useState(null);

  const params = useParams();

  const { resId } = useParams();

// custom hook 
  const resInfo = useRestaurantMenu(resId)



//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(`${MENU_URL}${resId}`);
//     const json = await data.json();

//     setresInfo(json?.data);
//     const jsonData =
//       json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//         .card.itemCards[0].card.info;
//     console.log("jsonData:", jsonData);
//   };

// const {name} = resInfo?.cards[2]?.card?.card?.info

  const name = resInfo?.cards[2]?.card?.card?.info?.name;
  const costForTwoMessage =
    resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
  const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
