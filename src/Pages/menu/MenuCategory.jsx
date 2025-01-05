import React from "react";
import MenuItem from "../../Shared/menuItem";
import Cover from "../../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}>
            {item.name}
          </MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-end  m-5">
        <button className="  btn btn-outline border-0 border-b-4  mt-4 ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
