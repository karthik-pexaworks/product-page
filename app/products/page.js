import Link from "next/link";

export const revalidate = 60;

export default async function ProductsPage() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Products</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="aspect-square bg-gray-50 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-48 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-800 line-clamp-2">
                  {p.title}
                </h3>
                <span className="text-sm text-gray-500 capitalize">
                  {p.category}
                </span>
              </div>
              <p className="text-blue-600 font-bold text-lg">${p.price}</p>
              <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
