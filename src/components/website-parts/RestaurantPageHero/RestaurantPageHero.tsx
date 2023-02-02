import { ImageOverlay } from "@/components/ui-components/ImageOverlay/ImageOverlay.styled";
import { RestaurantType } from "@/mocks/restaurant-api-response.type";
import Image from "next/image";
import { FC } from "react";
import { HeroContainer } from "./RestaurantPageHero.styled";

interface Props {
  restaurant: RestaurantType;
}

export const RestaurantPageHero: FC<Props> = ({ restaurant }) => {
  return (
    <HeroContainer>
      <Image
        style={{ objectFit: "cover", backgroundRepeat: "no-repeat" }}
        fill
        src={restaurant.imageUrl}
        alt={restaurant.name}
      />
      <ImageOverlay overlayOpacity={60} />
    </HeroContainer>
  );
};
