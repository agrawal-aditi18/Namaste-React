import ResturantCard from "./ResturantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variables - Super powerful variable
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [filteredResturants, setfilteredResturants] = useState([]);
  const [searchText, setsearchText] = useState("");

 useEffect( ()=>{
  fetchData();
 }, []);

 const fetchData = async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api "
  );
  const json = await data.json();
  console.log(json);
  //Optional Chaining
  const restaurants =
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  setlistOfResturants(restaurants);
  setfilteredResturants(restaurants);
 }

 //Conditional Rendering
  return listOfResturants.length === 0 ?<Shimmer /> :  (
    <div className="body">
      <div className="filter">
      
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
        <button onClick={() => {
          //Filter the resturant cards and Update the UI
          //searchText
          console.log(searchText);
          const filteredResturant = listOfResturants.filter((res)=>
             res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setfilteredResturants(filteredResturant);

        }}>Search</button>
      </div>

        <button className="filter-btn" onClick={() => {
          const filteredList = listOfResturants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setfilteredResturants(filteredList);

        }}>Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {/* //doing a reslist of map for each resturant, we are just redenring ResturantCard */}
        {filteredResturants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;