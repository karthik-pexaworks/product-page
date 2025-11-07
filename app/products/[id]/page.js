export const revalidate = 60;

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  console.log(res);
  const products = await res.json();
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-80 object-contain rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-2xl text-blue-600 font-semibold">${product.price}</p>
        <p className="text-sm text-gray-500 italic">Category: {product.category}</p>

        <div className="pt-4">
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            ← Back to Products
          </a>
        </div>
      </div>
    </div>
  );
}
