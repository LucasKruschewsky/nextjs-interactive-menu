import { getAllRestaurantsPaths, getRestaurantData } from "@/api/restaurants";
import { Navbar } from "@/components/website-parts/Navbar/Navbar";
import { RestaurantPageHero } from "@/components/website-parts/RestaurantPageHero/RestaurantPageHero";
import { RestaurantType } from "@/mocks/restaurant-api-response.type";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const RestaurantDisplay: NextPageWithLayout<Props> = ({
  restaurantData,
}) => {
  return (
    <>
      <Head>
        <title>{`${restaurantData[0].name} - Interactive Menu`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RestaurantPageHero restaurant={restaurantData[0]} />
      </main>
    </>
  );
};

RestaurantDisplay.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar positionAbsolute />
      {page}
    </>
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
