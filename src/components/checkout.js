"use client";
import { useState } from "react";
import Button from "./button";
import { useSelector } from "react-redux";
import Image from "next/image";

const Checkout = () => {
  const [name, setName] = useState("");
  const { cartItem, totalCartValue, totalDiscount } = useSelector(
    (state) => state.cart
  );
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handlePayment = () => {
    // Your payment logic goes here
    // You can use the state variables (name, email, address, etc.) to send data to your backend or perform any other necessary actions.
  };

  return (
    <div className="text-black-600 body-font">
      <div className="container px-5 py-8 mx-auto transition-all">
        <h2 className="font-bold text-2xl hidden md:block">Order Review</h2>
        <div className="flex md:justify-between md:flex-row flex-col pt-4">
          <div className="left md:w-2/3">
            <div className="address md:border md:border-gray-300 md:rounded-3xl h-fit">
              <div className="flex flex-col md:p-4">
                <div className="hero mb-3">
                  <h3 className="font-bold">Delivery Address</h3>
                </div>
                <hr />
                <div className="addressfield mt-4">
                  <div className="mx-auto flex">
                    <div className="px-2 w-1/2">
                      <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value=""
                          fdprocessedid="q7qz1"
                        />
                      </div>
                    </div>
                    <div className="px-2 w-1/2">
                      <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value=""
                          fdprocessedid="zyiiiv"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-2 w-full">
                    <div className="mb-4">
                      <label htmlFor="address" className="leading-7 text-sm">
                        Address
                      </label>
                      <textarea
                        minLength="2"
                        maxLength="400"
                        name="address"
                        id="address"
                        cols="30"
                        rows="2"
                        className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                      <div className="relative mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm">
                          Phone Number
                        </label>
                        <input
                          minLength="10"
                          maxLength="10"
                          placeholder="Your 10 Digit Phone Number"
                          type="text"
                          id="phone"
                          name="phone"
                          className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value=""
                          fdprocessedid="6bxsd"
                        />
                      </div>
                    </div>
                    <div className="px-2 w-1/2">
                      <div className="relative mb-4">
                        <label htmlFor="pincode" className="leading-7 text-sm">
                          PinCode (India)
                        </label>
                        <input
                          minLength="6"
                          maxLength="8"
                          type="text"
                          id="pincode"
                          name="pincode"
                          className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value=""
                          fdprocessedid="gmhi3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                      <div className="relative mb-4">
                        <label htmlFor="city" className="leading-7 text-sm">
                          City
                        </label>
                        <input
                          minLength="1"
                          maxLength="20"
                          type="text"
                          id="city"
                          name="city"
                          className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          readOnly=""
                          value=""
                          fdprocessedid="curyna"
                        />
                      </div>
                    </div>
                    <div className="px-2 w-1/2">
                      <div className="relative mb-4">
                        <label htmlFor="state" className="leading-7 text-sm">
                          State
                        </label>
                        <input
                          minLength="1"
                          maxLength="20"
                          type="text"
                          id="state"
                          name="state"
                          className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          readOnly=""
                          value=""
                          fdprocessedid="3fhmi"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-items md:border md:border-gray-300 md:rounded-3xl h-fit mt-4">
              <div className="flex flex-col md:p-4">
                <div className="flex justify-between font-bold">
                  <h3>Cart Items ({cartItem.length})</h3>
                  <h3>₹{totalCartValue}</h3>
                </div>
                <div className="items my-5">
                  <div>
                    <div className="flex flex-col">
                      {cartItem.map((item) => (
                        <div className="items" key={item._ids}>
                          <div>
                            <div className="flex flex-col">
                              <div className="item flex flex-row">
                                <div className="w-20 mr-2">
                                  <Image
                                    alt="img"
                                    width="569"
                                    height="740"
                                    className="rounded-lg"
                                    src="https://m.media-amazon.com/images/I/71O1QaI-sbL._SY879_.jpg"
                                  />
                                </div>
                                <div className="details">
                                  <a href="/product/levis-green-m">
                                    <div className="itemName text-gray-600">
                                      {"Levis Men's Fine (M/Green)"}
                                    </div>
                                  </a>
                                  <div className="price mt-1 flex">
                                    <div className="discounted">₹999</div>
                                    <div className="original line-through ml-2 text-gray-400">
                                      ₹1250
                                    </div>
                                  </div>
                                  <div className="save text-sm mt-1 w-fit text-green-600 bg-emerald-50 font-semibold">
                                    You Save ₹251
                                  </div>
                                  <div className="soldBy mt-1 text-sm md:text-md text-gray-600">
                                    Sold by: Levis
                                  </div>
                                </div>
                              </div>
                              <div className="buttons flex justify-end">
                                <div className="flex items-center justify-center">
                                  <button
                                    className="border border-gray-300 rounded-full p-1  md:p-2 hover:border-primary"
                                    fdprocessedid="pobscf"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      className=" text-primary"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                                    </svg>
                                  </button>
                                  <span className="mx-2">1</span>
                                  <button
                                    className="border border-gray-300 rounded-full p-1 md:p-2 hover:border-primary"
                                    fdprocessedid="fr79o"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      t="1551322312294"
                                      viewBox="0 0 1024 1024"
                                      version="1.1"
                                      className="text-primary"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <defs></defs>
                                      <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                                      <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-details md:w-1/3 flex flex-col md:ml-5">
            <div className="breakdown flex flex-col ">
              <div className="free hidden text-sm md:border md:border-gray-300 md:rounded-t-3xl md:rounded-none p-4 bg-primary rounded-lg">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="!text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc></desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M4 5h2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5 4v2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.5 4l-.5 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18 5h2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19 4v2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 9l-1 1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18 13l2 -.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18 19h2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19 18v2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Yay! You get FREE delivery with this order.
              </div>
              <div className="p-4 mt-4 md:rounded-3xl md:border md:border-gray-300">
                <div className="names font-bold">Payment Details</div>
                <div className="break flex flex-col">
                  <div className="mrp-total flex justify-between pt-2 md:text-lg">
                    <div className="text-gray-500">MRP Total</div>
                    <div className="value text-gray-500">{totalCartValue}</div>
                  </div>
                  <hr />
                  <div className="pro-disc flex justify-between pt-2 md:text-lg">
                    <div className="text-gray-500">Product Discount</div>
                    <div className="value text-green-600">
                      - {`₹${totalDiscount}`}
                    </div>
                  </div>
                  <hr />
                  <div className="delivery-fee flex justify-between pt-2 md:text-lg">
                    <div className="text-gray-500">Delivery Fee</div>
                    <div className="value">₹40.00</div>
                  </div>
                  <hr />
                  <div className="total flex justify-between pt-2 md:text-lg">
                    <div className="text-gray-500">Total</div>
                    <div className="value flex flex-col">
                      <div className="text-end font-bold">
                        ₹{totalCartValue - totalDiscount}
                      </div>
                      <div className="text-green-600">
                        You Saved ₹{totalDiscount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                title={"Make Payment"}
                classes={
                  "placeorder bg-primary mt-4 text-white px-4 py-2 font-semibold md:text-lg rounded-3xl disabled:bg-primary"
                }
              />
            </div>
          </div>
        </div>
        <hr className="mx-16" />
      </div>
    </div>
  );
};

export default Checkout;
