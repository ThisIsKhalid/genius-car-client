import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, title, price } = service;
  const navigate = useNavigate();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    // validation korte hbe
    // if else diye
    fetch("https://genius-car-server-one-smoky.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed Succesfully");
          form.reset();
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-10">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are about to order: {title}</h2>
        <h4 className="text-3xl">Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full "
          />
          <input
            name="email"
            type="text"
            defaultValue={user?.email}
            readOnly
            placeholder="Your Email"
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full my-5"
          placeholder="Your message"
        ></textarea>
        <input
          className="btn btn-outline btn-primary"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
