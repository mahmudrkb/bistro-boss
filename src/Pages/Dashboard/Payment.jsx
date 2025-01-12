import React from "react";
import SectionsTitles from "../../Shared/SectionsTitles";
import { loadStripe } from "@stripe/stripe-js";
import CheckForm from "./CheckForm";
import { Elements } from "@stripe/react-stripe-js";


// TODO pk
const stripePromise =loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
  return (
    <div>
      <SectionsTitles
        heading={"payment"}
        subheading={"please pay to eat"}
      ></SectionsTitles>
      <div>
        <Elements stripe={stripePromise}>
          {" "}
          <CheckForm/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
