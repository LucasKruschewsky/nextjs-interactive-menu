import { getAllRestaurantsPaths, getRestaurantData } from "@/api/restaurants";
import { RestaurantType } from "@/mocks/restaurant-api-response.type";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const RestaurantDisplay: FC<Props> = ({ restaurantData }) => {
  return (
    <Image
      width={200}
      height={200}
      src={restaurantData[0].imageUrl}
      alt={`${restaurantData[0].name}`}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllRestaurantsPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  {
    restaurantData: RestaurantType[];
  },
  {
    restaurant: string;
  }
> = async ({ params }) => ({
  props: {
    restaurantData: getRestaurantData(params?.restaurant),
  },
});

export default RestaurantDisplay;
