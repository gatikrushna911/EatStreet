import { IMG_URL_CDN } from "../utils/constants";

const RestaurantCard = ({ name, cuisines, avgRating, costForTwoMessage }) => {
  //const { name, cuisines, avgRating, costForTwoMessage } = data;
  console.log(cuisines);
  return (
    <>
      <div className="w-64 m-2 p-1 border border-gray-400 border-solid shadow-md">
        <img src={IMG_URL_CDN} alt="restaurant image" />
        <h1 className="pl-1 font-bold">{name}</h1>
        <h3 className="pl-1 font-light text-sm">
          {cuisines.slice(0, 3).join(",")}
        </h3>
        <div className="flex font-light text-sm">
          <h4 className="pl-1 pr-10">{avgRating}</h4>
          <h4 className="pl-10">{costForTwoMessage}</h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
