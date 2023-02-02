import { apiRestaurantResponseToArray } from "@/helpers/apiRestaurantResponseToArray";
import { slugfyText } from "@/helpers/slugfyText";
import {
  RestaurantApiResponse,
  RestaurantType,
} from "@/mocks/restaurant-api-response.type";
import mockData from "@/mocks/restaurant-list";

export const getAllRestaurantsPaths = () => {
  // This mockData will com from DB latter
  const restaurants = apiRestaurantResponseToArray(mockData);

  return restaurants.map((restaurant) => ({
    params: {
      restaurant: slugfyText(restaurant.name),
    },
  }));
};

export const getRestaurantData = (
  slugfiedName: string | undefined
): RestaurantType[] => {
  if (slugfiedName === undefined) return [];

  const restaurantList = apiRestaurantResponseToArray(mockData);

  return restaurantList.filter(
    (restaurant) => slugfyText(restaurant.name) === slugfiedName
  );
};
