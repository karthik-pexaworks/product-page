import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center space-y-16">
      <section className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Discover <span className="text-blue-600">Modern Products</span> at
          FakeStore 🛍️
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          High-quality fashion, electronics, and more — built to inspire your
          daily life. Explore a curated collection powered by Next.js and the
          FakeStore API.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            🛒 Browse Products
          </Link>
          <a
            href="https://fakestoreapi.com"
            target="_blank"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Learn More →
          </a>
        </div>
      </section>
      <section className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-6 border border-gray-100">
          <div className="text-blue-600 text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Blazing Fast
          </h3>
          <p className="text-gray-600 text-sm">
            Built with Next.js App Router and Incremental Static Regeneration
            for lightning-fast loads.
          </p>
        </div>

        <div className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-6 border border-gray-100">
          <div className="text-blue-600 text-4xl mb-3">🧠</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Smartly Built
          </h3>
          <p className="text-gray-600 text-sm">
            Uses modern data-fetching patterns with <code>generateStaticParams</code> and
            <code>revalidate</code> for a smarter web experience.
          </p>
        </div>

        <div className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-6 border border-gray-100">
          <div className="text-blue-600 text-4xl mb-3">🎨</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Beautifully Styled
          </h3>
          <p className="text-gray-600 text-sm">
            Powered by Tailwind CSS v3 for a clean, responsive, and elegant
            design.
          </p>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-16 mt-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-4">
          <h2 className="text-3xl font-bold">
            Ready to explore our products?
          </h2>
          <p className="text-lg opacity-90">
            Get started now and browse hundreds of items powered by the
            FakeStore API.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
          >
            View Products →
          </Link>
        </div>
      </section>
    </main>
  );
}
