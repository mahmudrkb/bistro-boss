import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  // use interceptor to add authorizations headers for every  secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interceptor 401 and 403 status

  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      const status = error.response.status;
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("status error in the interceptors", error);
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
