import { auth } from "@/auth";

 function getFeaturedProducts() {
  // This function will later fetch data from an API
  return [
    { id: 1, name: "Nike Air Zoom", price: "$120", image: "/temp_images/shoe1.jpg" },
    { id: 2, name: "Nike Air Max", price: "$150", image: "/temp_images/shoe2.jpg" },
    { id: 6, name: "Nike Air Max", price: "$150", image: "/temp_images/shoe3.jpeg" },
    { id: 7, name: "Nike Air Max", price: "$150", image: "/temp_images/shoe1.jpg" },
    { id: 8, name: "Nike Air Max", price: "$150", image: "/temp_images/shoe2.jpg" }
  ];
}

 function getTrendingProducts() {
  // This function will later fetch data from an API
  return [
    { id: 3, name: "Nike Revolution", price: "$110", image: "/temp_images/shoe3.jpeg" },
    { id: 4, name: "Nike Flex Runner", price: "$100", image: "/temp_images/shoe2.jpg" },
    { id: 5, name: "Nike Flex Runner", price: "$100", image: "/temp_images/shoe1.jpg" },
    { id: 9, name: "Nike Air Max", price: "$150", image: "/temp_images/shoe2.jpg" },
    { id: 10, name: "Nike Air Max", price: "$150", image: "/temp_images/shoe3.jpeg" }
  ];
}

// Reusable Product Card Component
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}



export default async function Home() {
  const data = await auth();

  console.log(data);

  
  const featuredProducts = await getFeaturedProducts();
  const trendingProducts = await getTrendingProducts();

  <a href="">A person in running shoes on the background of an electronic signal Stock photos by Vecteezy</a>
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[800px] bg-cover bg-center" style={{ backgroundImage: "url('/temp_images/hero.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
          <h1 className="text-5xl font-bold mb-6">Step into Style</h1>
          <p className="text-xl mb-6">Discover the best collection of shoes for all your needs.</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 my-12">
        <h2 className="text-4xl font-semibold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-6 my-12">
        <h2 className="text-4xl font-semibold mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
