import featured from "../../assets/home/featured.jpg"
import SectionsTitles from "../../Shared/SectionsTitles";

const Featured = () => {
    return (
      <div className= "  pt-3 pb-16 bg-fixed bg-featured bg-cover bg-center bg-no-repeat  text-white " >
         <SectionsTitles
        heading={"Check It Out"}
        subheading={"Featured item"}
      ></SectionsTitles>
          <div className=" mx-auto w-5/6 flex items-center gap-10">
           <div>
            <img className="max-w-md   " src={featured} alt="" />
           </div>

           
           <div className="space-y-4">
            <p>Aug, 20 2029</p>
            <p>Where can i gate some food</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi molestias soluta aliquid distinctio aut libero eveniet dicta eaque suscipit alias.</p>
            <button className=" text-white btn btn-outline border-0 border-b-4  mt-4 ">Order Now</button>

           </div>
        </div>
      </div>
    );
};

export default Featured;