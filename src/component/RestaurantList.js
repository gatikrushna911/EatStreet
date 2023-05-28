import RestaurantCard from "./RestaurantCard";
import { RETAURANT_LIST_DATA } from "../utils/constants";
const RestaurantList = () => {
  // const restData = {
  //   avgRating: "4.3",
  //   cuisines: ["Burgers", "American"],
  //   name: "Burger King",
  //   costForTwoMessage: "₹350 for two",
  // };
  return (
    <>
      <div className="flex flex-wrap">
        {RETAURANT_LIST_DATA.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
