import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
const stripePromise = loadStripe('pk_test_51Ie3GzGoxDgdIGJZSYXdDRkV9h6UbgDLjPIJ0tELYU72qnwnHZvUFKYqZbvSvapzw4Iv0SWxTs6zKddLA9gsPDn600N4dinysx');


const ProcessPayment = () => {
  return (
    <div classNamer='p-5'>
      <Elements stripe={stripePromise}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </Elements>
    </div>
  );
};

export default ProcessPayment;
