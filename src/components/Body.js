import RestaurantCard from "./RestaurantCard"
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Body = () => {
  //Local State Variables - Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  
console.log("Body Rendered", listOfRestaurants);

 useEffect( ()=>{  
  fetchData();
 }, []);
   
 const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  console.log(json);
  //Optional Chaining
  const restaurants =
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  setlistOfRestaurants(restaurants || []);
  setfilteredRestaurants(restaurants || []);
 }


const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>Looks like you are offline. Please Check your Internet Connection!</h1>

const {loggedInUser, setUserName } = useContext(UserContext);

 //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-pink-300 rounded-md m-4"
            onClick={() => {
              //Filter the resturant cards and Update the UI
              //searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-pink-300 rounded-md "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilteredRestaurants(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label> UserName: </label>
          <input className="border border-black p-2"
          value = {loggedInUser}
          onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* //doing a reslist of map for each resturant, we are just redenring ResturantCard */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;