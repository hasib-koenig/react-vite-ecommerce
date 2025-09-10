import React from "react";

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="bg-orange-200 rounded-2xl flex flex-col md:flex-row items-center justify-between px-10 py-16 mb-16 shadow-lg">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-orange-600">HasibStore</span>
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Discover amazing deals on the latest products. Shop now and enjoy
            fast delivery right to your door.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>
        <img
          src="https://via.placeholder.com/400x300"
          alt="Hero Banner"
          className="mt-10 md:mt-0 rounded-xl shadow-md"
        />
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Electronics", "Fashion", "Home & Kitchen", "Sports"].map(
            (cat, i) => (
              <div
                key={i}
                className="bg-orange-100 rounded-xl flex items-center justify-center h-32 font-semibold text-lg hover:bg-orange-200 cursor-pointer transition"
              >
                {cat}
              </div>
            )
          )}
        </div>
      </section>

      {/* Best Selling Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((p) => (
            <div
              key={p}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={`https://via.placeholder.com/250x200?text=Product+${p}`}
                alt={`Product ${p}`}
                className="rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Product {p}</h3>
              <p className="text-gray-600 mb-2">$ {(p * 25).toFixed(2)}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hero;
