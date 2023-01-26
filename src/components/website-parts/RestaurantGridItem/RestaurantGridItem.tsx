import { Button } from "@/components/ui-components/Button/Button";
import { RestaurantType } from "@/mocks/restaurant-api-response.type";
import { FC } from "react";
import {
  RestaurantDetails,
  RestaurantGridItemContainer,
  RestaurantImage,
} from "./RestaurantGridItem.styled";

interface Props {
  restaurant: RestaurantType;
}

export const RestaurantGridItem: FC<Props> = ({ restaurant }) => {
  return (
    <RestaurantGridItemContainer key={restaurant.id}>
      <RestaurantImage backgroundImgUrl={restaurant.imageUrl} />
      <RestaurantDetails>
        <p className="restaurant-item-name">{restaurant.name}</p>
        <Button className="p-button-raised p-button-rounded testingClassName">
          See More
        </Button>
      </RestaurantDetails>
    </RestaurantGridItemContainer>
  );
};
