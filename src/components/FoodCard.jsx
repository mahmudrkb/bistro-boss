import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";



const FoodCard = ({item}) => {
  const { price, image, name, recipe,  _id } = item;
  const axiosSecure = useAxiosSecure();
  const [,refetch]=useCart()
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  
  const handleAddToCart =() => {
    if (user && user.email) {
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Food added on the cart successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not login Now!",
        text: "Do you want to Login Now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card  flex flex-col w-96 shadow-xl">
        <figure>
          <img src={image} />
          <p className=" bg-black mr-2 rounded-md text-white absolute top-0 right-0 p-2 ">
            $ {price}
          </p>
        </figure>
        <div className="card-body flex flex-col items-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="car((d-actions justify-end">
            <button
              onClick={handleAddToCart}
              className=" text-orange-400 bg-slate-100 btn btn-outline border-0 border-b-4  mt-4 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
