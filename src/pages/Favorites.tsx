import React from "react";
import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";
import FavoritesBannerImg from "../images/banners/favorites-banner.png";
import { FavoriteToursList } from "../components/FavoriteToursList";

const Favorites: React.FC = () => {
  return (
    <>
      <Header />
      <MainBanner banner={FavoritesBannerImg} title="Favorites" favorites />
      <FavoriteToursList />
    </>
  );
};

export default Favorites;
