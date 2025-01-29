"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCart } from "../cartAction/action";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    city: false,
    country: false,
    address: false,
  });

  useEffect(() => {
    setCartItems(getCart());
    const appliedDiscount = localStorage.getItem("Applied Discount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const Subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      city: !formValues.city,
      country: !formValues.country,
      address: !formValues.address,
    };
    setFormErrors(errors);
    return !Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("Applied Discount");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <nav className="text-sm text-gray-600">
          <Link href="/cart" className="hover:text-gray-800">
            Cart
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-semibold">Checkout</span>
        </nav>

        <div className="mt-10 flex flex-col lg:flex-row gap-12">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.productName}
                        width={50}
                        height={50}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    )}
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {item.productName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.inventory}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800">
                    Rs.{item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in cart</p>
            )}

            <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold text-gray-800">
              <span>Sub Total</span>
              <span>Rs.{(Subtotal - discount).toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Form */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>

            <form onSubmit={(e) => e.preventDefault()}>
              {[
                "firstName",
                "lastName",
                "email",
                "phone",
                "city",
                "country",
                "address",
              ].map((field) => (
                <div key={field} className="mb-4">
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.split(/(?=[A-Z])/).join(" ")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    id={field}
                    value={formValues[field as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                      formErrors[field as keyof typeof formErrors]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder={`Enter your ${field}`}
                  />
                  {formErrors[field as keyof typeof formErrors] && (
                    <p className="text-xs text-red-500 mt-1">
                      This field is required
                    </p>
                  )}
                </div>
              ))}

              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-6">
                <Link
                  href={"/cart"}
                  className="py-2 px-2 border border-gray-300 text-center text-sm font-medium text-gray-700 rounded-full hover:bg-transparent w-full sm:w-[48%]"
                >
                  Back to Cart
                </Link>

                <button
                  type="submit"
                  onClick={handlePlaceOrder}
                  className="py-2 px-2 bg-myColor2 text-white rounded-full font-medium w-full sm:w-[48%]"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

