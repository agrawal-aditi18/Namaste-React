import ResturantCard from "./ResturantCard"
import resList from "./utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variables - Super powerful variable
  const [listOfResturants, setlistOfResturants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfResturants.filter(
            (res) => res.data.avgRating > 4.3
          );
          setlistOfResturants(filteredList);

        }}>Top Rated Resturants</button>
      </div>
      <div className="res-container">
        {/* //doing a reslist of map for each resturant, we are just redenring ResturantCard */}
        {listOfResturants.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;