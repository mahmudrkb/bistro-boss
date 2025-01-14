import React, { useState } from "react";
import Cover from "../../Shared/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const categories=["salad", 'soup', "pizza", "dessert", "drinks"]
  const {category}=useParams()
  const initialIndex=categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
       <Helmet>
        <title> Order Food || Bistro Boss</title>
      </Helmet>
    
      <Cover img={orderImg} title={"Order Food"}></Cover>
      <div className="my-10  ">
        <Tabs   selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList >
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
          <OrderTab items={salad} ></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soup} ></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza} ></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert} ></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinks} ></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
