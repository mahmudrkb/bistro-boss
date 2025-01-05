import React, { useEffect, useState } from "react";
import SectionsTitles from "../../Shared/SectionsTitles";
import MenuItem from "../../Shared/menuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // const [ menu, setMenu ] = useState([]);

  // useEffect(() => {
  //   fetch('menu.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const PopularMenu = data.filter((item) => item.category === "popular");
  //       setMenu(PopularMenu);
  //     });
  // }, []);

  return (
    <div className="my-10">
      <SectionsTitles
        heading={"from our menu"}
        subheading={"popular item"}
      ></SectionsTitles>

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}>
            {item.name}
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
