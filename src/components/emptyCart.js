import Image from "next/image";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <section className="text-black-600 body-font min-h-screen">
      <div className="container md:px-10 px-5 py-8 mx-auto transition-all">
        <h2 className="font-bold text-2xl hidden md:block">My Cart</h2>
        <div className="p-10 text-center flex flex-col justify-center">
          <Image
            alt=""
            loading="lazy"
            width="512"
            height="512"
            className="m-auto w-12"
            style={{color:"transparent"}}
            src="https://shop.ankanroy.in/_next/image?url=https%3A%2F%2Fi.ibb.co%2F7vcv8Tz%2F685391.png&w=1080&q=75"
          />
          <h3 className="pt-2 text-lg font-bold">Your Cart is Empty!</h3>
          <Link className="text-sm text-emerald-600 pt-1 font-semibold" href="/">
            <p>Continue Shopping</p>
          </Link>
        </div>
      </div>
      <hr className="mx-16" />
    </section>
  );
}
