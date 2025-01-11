import React from "react";
import {
  FaBook,
  FaBorderAll,
  FaCalendar,
  FaCalendarCheck,
  FaCartArrowDown,
  FaHome,
  FaList,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { IoMailSharp } from "react-icons/io5";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // todo set admin ...

  const [isAdmin] = useAdmin();
  return (
    <div className="container  mx-auto">


      <div className="flex gap-10">
        <div className="bg-orange-400  h-screen">
          <ul className="menu  text-base-content min-h-full w-56 p-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/dashboard/adminHome"}>
                    {" "}
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/dashboard/addItems"}>
                    <FaUtensils></FaUtensils>
                    Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageItems"}>
                    <FaList></FaList>
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageBookings"}>
                    <FaBook></FaBook>
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allUsers"}>
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
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
              </>
            )}


            {/* home page  */}
            <div className="divider"></div>

            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/menu">
                {" "}
                <MdMenuBook />
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink to="/order/salad">
                {" "}
                <FaBorderAll />
                Order
              </NavLink>
            </li>

            <li>
              <NavLink to="/order/contact">
                {" "}
                <IoMailSharp />
                contact
              </NavLink>
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
