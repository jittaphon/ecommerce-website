import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/headphone.png";
const ProductsData = [
  { id: 1, img: Img1, title: "Boat Headphone", price: "120", aosDelay: "0" },
  { id: 2, img: Img1, title: "Rocky Mountain", price: "220", aosDelay: "100" },
  { id: 3, img: Img1, title: "Goggles", price: "520", aosDelay: "200" },
  { id: 4, img: Img1, title: "Boat Headphone", price: "720", aosDelay: "300" },
];
const ProductsData2 = [
  { id: 1, img: Img1, title: "Boat Headphone", price: "120", aosDelay: "0" },
  { id: 2, img: Img1, title: "Rocky Mountain", price: "220", aosDelay: "0" },
  { id: 3, img: Img1, title: "Goggles", price: "520", aosDelay: "0" },
  { id: 4, img: Img1, title: "Boat Headphone", price: "720", aosDelay: "0" },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
