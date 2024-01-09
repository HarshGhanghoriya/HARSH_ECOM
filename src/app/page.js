import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-white relative bg-cover bg-[url('https://i.postimg.cc/t403yfn9/home2.jpg')] bg-center backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center bg-[#ffffffba] md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start text-center md:text-left">
            <h1 className="my-4 text-2xl md:text-5xl md:font-bold leading-tight font-black">
              Welcome to our Online Store
            </h1>
            <p className="leading-normal text-lg md:text-xl mb-8">
              Get the best deals on all your favorite products
            </p>
            <a
              href="#category"
              className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-3 md:px-6 md:py-3 border border-primary hover:border-transparent rounded hover:rounded-full transition-all"
            >
              Shop Now
            </a>
          </div>
        </div>
      </main>

      <section className="py-20" id="category">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Grab our Products
          </h2>
          <div className="flex flex-col md:flex-row gap-8 p-14 md:p-12">
            <Link
              className="flex flex-col items-center justify-center bg-white hover:bg-primary hover:text-white rounded-lg shadow-lg transition duration-300 ease-in-out h-fit"
              href="/product"
            >
              <Image
                alt="Category image"
                loading="lazy"
                width="233"
                height="311"
                className="w-full h-auto object-cover rounded-t-lg"
                style={{ color: "transparent" }}
                src="https://m.media-amazon.com/images/I/71HQX-AcPjL._SL1500_.jpg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">Tshirts</h3>
              </div>
            </Link>
            <Link
              className="flex flex-col items-center justify-center bg-white hover:bg-primary hover:text-white rounded-lg shadow-lg transition duration-300 ease-in-out h-fit"
              href="/product"
            >
              <Image
                alt="Category image"
                loading="lazy"
                width="233"
                height="311"
                className="w-full h-auto object-cover rounded-t-lg"
                style={{ color: "transparent" }}
                src="https://m.media-amazon.com/images/I/71HQX-AcPjL._SL1500_.jpg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">Tshirts</h3>
              </div>
            </Link>
            <Link
              className="flex flex-col items-center justify-center bg-white hover:bg-primary hover:text-white rounded-lg shadow-lg transition duration-300 ease-in-out h-fit"
              href="/product"
            >
              <Image
                alt="Category image"
                loading="lazy"
                width="233"
                height="311"
                className="w-full h-auto object-cover rounded-t-lg"
                style={{ color: "transparent" }}
                src="https://m.media-amazon.com/images/I/71HQX-AcPjL._SL1500_.jpg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">Tshirts</h3>
              </div>
            </Link>
            <Link
              className="flex flex-col items-center justify-center bg-white hover:bg-primary hover:text-white rounded-lg shadow-lg transition duration-300 ease-in-out h-fit"
              href="/product"
            >
              <Image
                alt="Category image"
                loading="lazy"
                width="233"
                height="311"
                className="w-full h-auto object-cover rounded-t-lg"
                style={{ color: "transparent" }}
                src="https://m.media-amazon.com/images/I/71HQX-AcPjL._SL1500_.jpg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">Tshirts</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
