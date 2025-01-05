import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover";
import imgCover from "../../assets/menu/banner3.jpg";
import img1 from "../../assets/menu/dessert-bg.jpeg";
import img2 from "../../assets/menu/soup-bg.jpg";
import img3 from "../../assets/menu/salad-bg.jpg";
import img4 from "../../assets/menu/pizza-bg.jpg";


import SectionsTitles from "../../Shared/SectionsTitles";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title> Menu || Bistro Boss</title>
      </Helmet>
      <Cover img={imgCover} title={"Our Menu"}></Cover>
      <SectionsTitles
        subheading={"Don't miss"}
        heading={"Today's offer"}
      ></SectionsTitles>

      <MenuCategory items={drinks}></MenuCategory>

      <MenuCategory items={dessert} title={"dessert"} img={img1}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={img2}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={img3}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={img4}></MenuCategory>

    </div>
  );
};

export default Menu;
