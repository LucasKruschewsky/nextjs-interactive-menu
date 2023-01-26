import { RestaurantApiResponse } from "./restaurant-api-response.type";

// Mocked data for now, this will be fetch from database later
const list: RestaurantApiResponse = {
  restaurant1: {
    name: "Mocked Restaurant 1",
    id: "1",
    foodType: ["Chinese Food"],
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
    foodType: ["Brazilian food", "Barbecue"],
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
  restaurant3: {
    name: "Mocked Restaurant 3",
    id: "3",
    foodType: ["Japanese food"],
    imageUrl:
      "https://thumbs.dreamstime.com/b/cozy-restaurant-tables-ready-dinner-39875776.jpg",
    branches: [
      {
        branchName: "Mocked Restaurant 3 Branch 1",
        address: "5 Street 4 Building Some street",
        menu: [
          {
            dishName: "dish 1 res3 branch1",
            images: [],
            price: 13,
            keyIngredients: ["ingredient 1", "ingredient 2"],
          },
        ],
      },
    ],
  },
  restaurant4: {
    name: "Mocked Restaurant 4",
    id: "4",
    foodType: ["Italian food", "Pizza"],
    imageUrl:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg",
    branches: [
      {
        branchName: "Mocked Restaurant 2 Branch 1",
        address: "5 Street 4 Building Some street",
        menu: [
          {
            dishName: "dish 1 res4 branch1",
            images: [],
            price: 13,
            keyIngredients: ["ingredient 1", "ingredient 2"],
          },
        ],
      },
    ],
  },
};

export default list;
