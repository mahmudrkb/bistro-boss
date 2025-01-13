import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionsTitles from "./../../Shared/SectionsTitles";

const PaymentsHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionsTitles
        heading={"Payments history"}
        subheading={"Check your payments"}
      ></SectionsTitles>
      <div>
        {" "}
        <h2 className="text-3xl">Total Payments: {payments?.length} </h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                 
                  <th>Price</th>
                  <th>Transaction Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment, index) => (
                  <tr key={index}> 
                    <th>{index+1}</th>
            
                    <td>{payment.price}</td>
                    <td>{payment.transactionId}</td>
                    <td >{payment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsHistory;
