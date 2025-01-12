import React from "react";
import useCart from "../../Hooks/useCart";

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, reFetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        console.log("wirk it");
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            reFetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="my-10">
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl"> Items {cart.length}</h2>
        <h2 className="text-4xl"> Total Price {totalPrice}</h2>
        {cart.length ? (
          <Link to='/dashboard/payment' >
            {" "}
            <button className="btn btn-primary"> Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary"> Pay</button>
        )}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-slate-300">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">$ {item.price}</td>
                  <td className="flex gap-5 items-center">
                    {/* <button>
                      {" "}
                      <CiEdit className="hover:bg-green-200 rounded-full " />{" "}
                    </button> */}
                    <div
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      <MdDelete className="hover:text-red-600 rounded-full " />{" "}
                    </div>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
