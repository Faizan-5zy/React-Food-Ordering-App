import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([]);

  //  useEffect

  useEffect(() => {
    fetchData();
  }, []);

  // API call using fetch
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const jsonData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfRestaurants(jsonData);
    setfilteredRestaurant(jsonData);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredItems = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setfilteredRestaurant(filteredItems);
          }}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) =>

          (
            // console.log('restaurant',restaurant.info.id)
            <Link
             key={restaurant.id}
             to={'/restaurants/'+restaurant.info.id}
             style={{paddingLeft: 13, textDecoration: 'none'}}
             >
             <RestaurantCard resData={restaurant} />
             </Link>
          )
        
        )
      }
      
      </div>
    </div>
  );
};

export default Body;
