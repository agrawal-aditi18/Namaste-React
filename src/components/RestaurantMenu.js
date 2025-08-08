import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => { 
const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(null);
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
 
    console.log(
      "fixxx",
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    const categories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) ||[];

      console.log("categories: ", categories);

    
    return (
      <div className="text-center">
        <h2 className="font-bold my-6 text-2xl">{name}</h2>
        <p className="font-bold text-lg">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
        {/* For each category we will build an acordian item */}
        {categories.map((category, index) => (
          // passing props
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
            // setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
};

export default RestaurantMenu;