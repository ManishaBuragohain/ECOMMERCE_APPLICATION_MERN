import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"; // Import axios

const Pay = () => {
  const KEY =
    "pk_test_51OcqcISCG01qiLElMr2Sj0XH3goeS7DOADPzMh9U2OTHRlwqXXSoaX18gGFjpLCQWBsqQWTbRkKviyC3JncJBqmp00wBws6Pi1";
  const onToken = (token) => {
    setStripeToken(token);
  };

  const [stripeToken, setStripeToken] = useState(null);
  useEffect(() => {
    stripeToken && makeReq(); // Move the conditional check inside useEffect
  }, [stripeToken]);

  const makeReq = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/checkout/payment",
        {
          tokenId: stripeToken.id,
          amount: 2000,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.error(error); // Log the error
    }
  };

  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center", // Fix typo 'cnetre' to 'center'
          height: "100vh",
          display: "flex",
        }}
      >
        <StripeCheckout
          name="manisha shop"
          image="https://avatars.githubusercontent.com/u/89069791?s=400&u=80c4014973d401ebe8e92161c4e62baed8711ad8&v=4"
          billingAddress
          shippingAddress
          description="your total is $420"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              borderRadius: "5",
              width: "120",
              padding: "20px",
              color: "white",
              backgroundColor: "black",
              fontWeight: "600",
              cursor: "pointer", // Fix typo 'POINTER' to 'pointer'
            }}
          >
            PAY NOW
          </button>
        </StripeCheckout>
      </div>
    </>
  );
};

export default Pay;
