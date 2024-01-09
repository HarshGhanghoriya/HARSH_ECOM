"use client";

import Button from "@/components/button";
import { addToCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function Page({
  buyNow = () => {},
  productItem = {},
  variants = [],
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const product = JSON.parse(searchParams.get("data"));
  const [pin, setPin] = useState("");
  const [service, setService] = useState();
  const { cartItem, value } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const checkServiceability = async () => {};

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const handleAddCart = () => {
    dispatch(addToCart(product));
    router.push("/cart");
  };

  console.log(cartItem, "cartItemcartItem");

  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const refreshVariant = (newsize, newcolor) => {};

  const notify = () => toast("Wow so easy!");

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              width="233"
                height="311"
              className="lg:w-1/2 w-full lg:h-auto px-12 object-cover object-top rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODEWEAR
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title} ({product.size})/{product.color}
              </h1>

              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>

                  <button
                    onClick={() => {
                      refreshVariant(size, "white");
                    }}
                    className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${
                      color == "white" ? "border-black" : "boreder-gray-300"
                    }`}
                  ></button>

                  <button
                    onClick={() => {
                      refreshVariant(size, "orange");
                    }}
                    className={`border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none ${
                      color == "orange" ? "border-black" : "boreder-gray-300"
                    }`}
                  ></button>

                  <button
                    onClick={() => {
                      refreshVariant(size, "black");
                    }}
                    className={`border-2 border-gray-800 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${
                      color == "black" ? "border-black" : "boreder-gray-300"
                    }`}
                  ></button>

                  <button
                    onClick={() => {
                      refreshVariant(size, "green");
                    }}
                    className={`border-2 border-gray-800 ml-1 bg-green-900 rounded-full w-6 h-6 focus:outline-none ${
                      color == "green" ? "border-black" : "boreder-gray-300"
                    }`}
                  ></button>

                  <button
                    onClick={() => {
                      refreshVariant(size, "blue");
                    }}
                    className={`border-2 border-gray-800 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none ${
                      color == "blue" ? "border-black" : "boreder-gray-300"
                    }`}
                  ></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariant(e.target.value, color);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex buttons mt-4">
                <Button
                  title={"Add to Cart"}
                  classes={
                    "bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded-full disabled:bg-emerald-300"
                  }
                  performAction={handleAddCart}
                />

                <Button
                  title={"Buy Now"}
                  classes={
                    "bg-primary text-white font-bold py-2 px-4 rounded-full ml-4 disabled:bg-emerald-300"
                  }
                  performAction={() => router.push("/checkout")}
                />
              </div>

              <div className="pin mt-6 flex space-x-2 text-md">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  className="text-2xl absolute mt-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                </svg>
                <input
                  type="text"
                  className="border-b-2 border-black outline-none text-black hover:border-primary focus:border-primary pl-5 w-1/2"
                  placeholder="Enter Pincode"
                  value=""
                />

                <Button
                  title={"Check"}
                  classes={
                    "bg-transparent hover:border-primary text-primary font-semibold py-2 px-4 border border-gray-300 rounded-full transition"
                  }
                />
              </div>

              {!service && service != null && (
                <div className="text-red-600 text-sm mt-3">
                  Sorry! We dont deliver to this pincode yet
                </div>
              )}

              {service && service != null && (
                <div className="text-green-600 text-sm mt-3">
                  Yay ! this pincode is Serviceable
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
