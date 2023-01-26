import { Button } from "@/components/ui-components/Button/Button";
import { ImageOverlay } from "@/components/ui-components/ImageOverlay/ImageOverlay.styled";
import { Body1 } from "@/components/ui-components/Typography/Body1";
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
      <RestaurantImage backgroundImgUrl={restaurant.imageUrl}>
        <ImageOverlay overlayColor="dark" />
      </RestaurantImage>
      <RestaurantDetails>
        <Body1 bold>{restaurant.name}</Body1>
        <Body1>{restaurant.foodType.join(", ")}</Body1>
        <Button className="p-button-raised p-button-rounded testingClassName">
          See More
        </Button>
      </RestaurantDetails>
    </RestaurantGridItemContainer>
  );
};
