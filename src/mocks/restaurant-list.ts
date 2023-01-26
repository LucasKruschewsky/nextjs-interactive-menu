import { RestaurantApiResponse } from "./restaurant-api-response.type";

const list: RestaurantApiResponse = {
  restaurant1: {
    name: "Mocked Restaurant 1",
    id: "1",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/22/4f/bf/2f/otro-restaurante.jpg",
    branches: [
      {
        branchName: "Mocked Restaurant 1 Branch 1",
        address: "5 Street 4 Building Some street",
        menu: [
          {
            dishName: "dish 1 res1 branch1",
            images: [],
            price: 13,
            keyIngredients: ["ingredient 1", "ingredient 2"],
          },
        ],
      },
    ],
  },
  restaurant2: {
    name: "Mocked Restaurant 2",
    id: "2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Abu_Nawas_Beach_restaurant_-_Flickr_-_Al_Jazeera_English_%281%29.jpg/1200px-Abu_Nawas_Beach_restaurant_-_Flickr_-_Al_Jazeera_English_%281%29.jpg",
    branches: [
      {
        branchName: "Mocked Restaurant 2 Branch 1",
        address: "5 Street 4 Building Some street",
        menu: [
          {
            dishName: "dish 1 res2 branch1",
            images: [],
            price: 13,
            keyIngredients: ["ingredient 1", "ingredient 2"],
          },
        ],
      },
      {
        branchName: "Mocked Restaurant 2 Branch 2",
        address: "5 Street 4 Building Some street",
        menu: [
          {
            dishName: "dish 1 res2 branch2",
            images: [],
            price: 13,
            keyIngredients: ["ingredient 1", "ingredient 2"],
          },
          {
            dishName: "dish 2 res2 branch2",
            images: [],
            price: 16,
            keyIngredients: ["ingredient 3", "ingredient 4"],
          },
        ],
      },
    ],
  },
};

export default list;
