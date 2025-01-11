import React from "react";
import SectionsTitles from "./../../Shared/SectionsTitles";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure=useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if(res.data.success){
        // now send the menu item to the server with image url 

        const menuItem={
            name:data.name,
            category:data.category,
            price:parseFloat ( data.price),
            recipe: data.recipe,
            image: res.data.data.display_url 
        }
        const menuRes= await axiosSecure.post('/menu', menuItem);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            reset()
            // show success popUp
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.name} is added to the menu `,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log('with image url',res.data);
  };
  return (
    <div>
      <SectionsTitles
        heading={"add an item"}
        subheading={"what's new"}
      ></SectionsTitles>
      <div className="max-w-lg bg-base-200 p-6 rounded-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex justify-between gap-3">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>

              <select
                defaultValue="default"
                {...register("category")}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price")}
                type="number"
                placeholder="price"
                className="input  input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add File*</span>
            </label>

            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn mt-5   btn-primary">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
