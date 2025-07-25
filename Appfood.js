import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
        </div>
        <div className="nav-items">
          <ul>  
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}

const ResturantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;    //this is optional chaining

    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
            cloudinaryImageId
          }
        />
        <h3 className="card-heading">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4> Rs {costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
}


const resList = [
  {
    type: "restaurant",
    data: {
      id: "1",
      name: "KFC",
      avgRating: 4.5,
      costForTwo: 40000,
      cuisines: ["Burgers", "Biryani", "Snacks"],
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 36,
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "2",
      name: "Domino's Pizza",
      avgRating: 4.2,
      costForTwo: 30000,
      cuisines: ["Pizza", "Italian", "Desserts"],
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      cloudinaryImageId: "vw6n5betlssnqelt7rmu",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "3",
      name: "Burger King",
      avgRating: 4.1,
      costForTwo: 35000,
      cuisines: ["Burgers", "American"],
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 28,
      cloudinaryImageId: "zbxhxxfu2yvwfnyubdve",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "4",
      name: "McDonald's",
      avgRating: 4.0,
      costForTwo: 32000,
      cuisines: ["Fast Food", "Burgers"],
      costForTwoString: "₹320 FOR TWO",
      deliveryTime: 25,
      cloudinaryImageId: "ee5c8e063cd8a0f13c8f56a0e09b3413",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "5",
      name: "Subway",
      avgRating: 4.3,
      costForTwo: 30000,
      cuisines: ["Healthy Food", "Sandwiches"],
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 20,
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "6",
      name: "Pizza Hut",
      avgRating: 4.0,
      costForTwo: 27000,
      cuisines: ["Pizza", "Italian"],
      costForTwoString: "₹270 FOR TWO",
      deliveryTime: 30,
      cloudinaryImageId: "vxrx7p54mq8kk2jl9k1v",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "7",
      name: "Wow! Momo",
      avgRating: 4.1,
      costForTwo: 20000,
      cuisines: ["Tibetan", "Chinese"],
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 22,
      cloudinaryImageId: "fvgivtwuiyyjkb3qzodt",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "8",
      name: "Faasos",
      avgRating: 4.2,
      costForTwo: 25000,
      cuisines: ["Wraps", "Fast Food"],
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 27,
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "9",
      name: "Behrouz Biryani",
      avgRating: 4.4,
      costForTwo: 50000,
      cuisines: ["Biryani", "Mughlai"],
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 35,
      cloudinaryImageId: "49d5c3ae5f6b393b37d3d1263815d1a3",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "10",
      name: "Oven Story Pizza",
      avgRating: 4.1,
      costForTwo: 27000,
      cuisines: ["Pizzas", "Italian"],
      costForTwoString: "₹270 FOR TWO",
      deliveryTime: 29,
      cloudinaryImageId: "b3bbdfabc4c38d7732cfb29f8fba352d",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "11",
      name: "Biryani Blues",
      avgRating: 4.3,
      costForTwo: 45000,
      cuisines: ["Biryani", "Hyderabadi"],
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 34,
      cloudinaryImageId: "b1w6ejrgoyxpzzxqpgul",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "12",
      name: "RollsKing",
      avgRating: 4.0,
      costForTwo: 24000,
      cuisines: ["Rolls", "Fast Food"],
      costForTwoString: "₹240 FOR TWO",
      deliveryTime: 24,
      cloudinaryImageId: "sjk3okjjnq5o7avqh9fv",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "13",
      name: "The Belgian Waffle Co.",
      avgRating: 4.5,
      costForTwo: 30000,
      cuisines: ["Waffles", "Desserts"],
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 26,
      cloudinaryImageId: "lhmjwnn5flav09vppf7f",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "14",
      name: "Bakingo",
      avgRating: 4.4,
      costForTwo: 35000,
      cuisines: ["Bakery", "Desserts"],
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 32,
      cloudinaryImageId: "rx4sjvdy8fa5obxzgu2j",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "15",
      name: "LunchBox",
      avgRating: 4.2,
      costForTwo: 29000,
      cuisines: ["North Indian", "Meals"],
      costForTwoString: "₹290 FOR TWO",
      deliveryTime: 29,
      cloudinaryImageId: "z9v6wygpcy35wfdpttfg",
    },
  },
];



const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* //doing a reslist of map for each resturant, we are just redenring ResturantCard */}
          {resList.map((restaurant) => (
            <ResturantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
}


const AppLayout = () => {
    return <div className="app">
        < Header />
        < Body />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);