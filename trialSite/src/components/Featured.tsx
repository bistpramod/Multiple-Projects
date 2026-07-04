import ProductCard from "../props/ProductCardProps";
import { featuredProducts } from "../data/products";
function Featured() {
  return (
    <div>
      <div className="mb-10 mt-10 text-center">
        <h2 className="text-4xl font-bold tracking-wide text-gray-900">
          Featured Products
        </h2>
        <p className="mt-3 text-gray-500">
          Explore our hand-picked collection of premium products.
        </p>
      </div>
      {/* <ProductCard
      image="#"
      title="#"
      category="#"
      price={100}  // the types are defined in the product Card props and from there is hould give the values here 
      
      /> */}

      {/* above is not the good way to display items  */}

      <div className="grid grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.title}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Featured;
