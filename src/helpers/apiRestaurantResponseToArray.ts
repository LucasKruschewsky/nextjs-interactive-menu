import {
  RestaurantApiResponse,
  RestaurantType,
} from "@/mocks/restaurant-api-response.type";

export const apiRestaurantResponseToArray = (
  restaurants: RestaurantApiResponse
): RestaurantType[] => {
  let restaurantsArray: RestaurantType[] = [];

  for (const [key, value] of Object.entries(restaurants)) {
    restaurantsArray = [...restaurantsArray, value];
  }
  return restaurantsArray;
};
