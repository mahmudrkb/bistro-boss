import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((result) => {
        console.log(result.data, "user added");
        navigate("/");
      });
    });
  };

  return (
    <div>
      <button onClick={handleGoogleSignin} className="btn">
        {" "}
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default GoogleLogin;
