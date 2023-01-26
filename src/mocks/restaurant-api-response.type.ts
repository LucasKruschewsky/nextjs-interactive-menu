export interface RestaurantApiResponse {
  [key: string]: RestaurantType;
}

export type RestaurantType = {
  name: string;
  id: string;
  imageUrl: string;
  branches: RestaurantBranchesType;
};

export type RestaurantBranchesType = {
  branchName: string;
  address: string;
  menu: RestaurantMenuType;
}[];

export type RestaurantMenuType = {
  dishName: string;
  images: string[];
  price: number;
  keyIngredients: string[];
}[];
