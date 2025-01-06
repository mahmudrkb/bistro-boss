import React from "react";
import {
  FaBorderAll,
  FaCalendar,
  FaCalendarCheck,
  FaCartArrowDown,
  FaHome,
  FaStar,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart]=useCart()
  return (
    <div className="container  mx-auto">
      <div className="flex">
        <div className="bg-orange-400  h-screen">
          <ul className="menu  text-base-content min-h-full w-56 p-4">
            <li>
              <NavLink to={"/dashboard/home"}>
                {" "}
                <FaHome></FaHome> User Home
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/cart"}>
                <FaCartArrowDown /> My Cart ( {cart.length} )
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/reservation"}>
                <FaCalendar></FaCalendar>
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/review"}>
                <FaStar></FaStar>
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/booking"}>
                <FaCalendarCheck></FaCalendarCheck>
                My Booking
              </NavLink>
            </li>
            <div className="divider"></div>

            <li>
              <NavLink to="/"><FaHome></FaHome> Home</NavLink>
            </li>

            <li>
              <NavLink to="/menu"> <MdMenuBook />
              Menu</NavLink>
            </li>

            <li>
              <NavLink to="/order/salad"> <FaBorderAll />Order</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
