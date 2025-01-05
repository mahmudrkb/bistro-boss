import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { signinUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const location=useLocation()

  const from=location.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    signinUser(email, pass)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-canter",
          icon: "success",
          title: "User Login successful ",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from,{replace:true})
      })
      .catch((error) => console.log(error.massage));
  };
  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 mx-auto  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="pass"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleCaptcha}
                  name="captcha"
                  placeholder="Type the above captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center mb-5">
              <p> Don't have an account?</p>
              <Link className="text-red-500" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
