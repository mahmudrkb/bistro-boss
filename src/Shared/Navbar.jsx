import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate=useNavigate()
  const handleLogout = () => {
    logOutUser()
    .then(()=>{
      navigate('/')
    
    })
    .catch(error=>console.log(error))
  };

  const NavLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Menu</Link>
      </li>

      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        {user? (
          <button onClick={handleLogout}>Log Out</button>
          
        ) : (
          <Link to="/login">Login</Link>
          
        )}
      </li>

      <li>
        <Link to="/register">Register</Link>
      </li>
      <li className="flex justify-center items-center  ">
        <img className="w-16 h-full rounded-full" src={user?.photoURL} alt="" />
      
       <h2>{user?.displayName}</h2>
      </li>
    </>
  );
  return (
    <div className=" container mx-auto  ">
      <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal   px-1">{NavLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
