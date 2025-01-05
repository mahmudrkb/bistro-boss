const FoodCard = ({ item }) => {
  const { price, image, name, recipe, category } = item;

  return (
    <div>
      <div className="card  flex flex-col w-96 shadow-xl">
        <figure>
          <img src={image} />
          <p className=" bg-black mr-2 rounded-md text-white absolute top-0 right-0 p-2 ">$ {price}</p>
        </figure>
        <div className="card-body flex flex-col items-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-end">
            <button className=" text-orange-400 bg-slate-100 btn btn-outline border-0 border-b-4  mt-4 ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
