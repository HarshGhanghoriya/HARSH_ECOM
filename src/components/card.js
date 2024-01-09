import Image from "next/image";
import Link from "next/link";

const Card = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div key={products._id} className="w-[20rem] delay-100 cursor-pointer shadow-lg  hover:shadow-xl ">
        <Link
          passHref={true}
          key={products._id}
          href={{
            pathname: `/product/${[products.slug]}`,
            query: { data: JSON.stringify(products) },
          }}
        >
          <div className="flex justify-center relative rounded overflow-hidden  ">
            <Image
              alt="ecommerce"
              width="233"
                height="311"
              className="w-full h-[40vh] md:h-[46vh] block"
              src={products.img}
            />
          </div>
        </Link>

        <div className="mt-4 text-center md:text-left p-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            T-Shirts
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {products.title}
          </h2>
          <p className="mt-1">₹{products.price}</p>
          <div className="mt-1">
            {<span className="border  border-gray-300 px-1 mx-1">S</span>}
            {<span className="border  border-gray-300 px-1 mx-1">M</span>}
            {<span className="border  border-gray-300 px-1 mx-1">L</span>}
            {<span className="border  border-gray-300 px-1 mx-1">XL</span>}
            {<span className="border  border-gray-300 px-1 mx-1">XXl</span>}
          </div>
          <div className="mt-1">
            {
              <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
            }
            {
              <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
            }
            {
              <button className="border-2 border-gray-300 ml-1 bg-green-900 rounded-full w-6 h-6 focus:outline-none"></button>
            }
            {
              <button className="border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>
            }
            {
              <button className="border-2 border-gray-300 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
