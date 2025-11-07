export const dynamic = "force-dynamic"; // disables static caching

export default async function SSRExamplePage() {
  // fetch data fresh on every request
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="space-y-10 fade-in">
      <section>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">SSR Example</h1>
        <p className="text-gray-600">
          This page uses <code>fetch(..., {{ cache: 'no-store' }})</code> to render
          fresh data on every request — no static caching.
        </p>
      </section>

      <div className="bg-white shadow-md rounded-2xl p-6">
        <p className="text-gray-700 mb-3">
          <strong>Server time:</strong> {new Date().toLocaleString()}
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Fetched Products:</strong> {products.length}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <div
              key={p.id}
              className="p-4 border border-gray-100 rounded-xl hover:shadow-lg transition-all"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-32 mx-auto mb-3 object-contain"
              />
              <h3 className="font-medium text-gray-800 line-clamp-2">
                {p.title}
              </h3>
              <p className="text-blue-600 font-semibold mt-2">${p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
