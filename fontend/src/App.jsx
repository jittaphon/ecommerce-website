import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Category from "./Component/Category/Category";
import Category2 from "./Component/Category/Category2";
import Service from "./Component/Service/Service";
import Banner from "./Component/Banner/Banner";
import headphone from "../src/assets/headphone.png";
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipsicing elit. Eaue reiciendis",
  bgColor: "#f42c37",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Service />
      <Banner data={BannerData} />
    </div>
  );
};

export default App;
