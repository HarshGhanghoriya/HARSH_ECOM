import Card from "@/components/card";
import product from "@/data/data";

export default function Page() {
  return (
    <>
    <section className="py-10 px-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {product.map((item) => (
        <Card products={item} key={item._id}/>
      ))}
      </div>
      </section>
    </>
  );
}

