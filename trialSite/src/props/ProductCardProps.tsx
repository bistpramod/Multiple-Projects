// its for the just cards made for the featured category

type ProductCardProps = { // type defined for the assets
  image: string;
  title: string;
  category: string;
  price: number;
};

const ProductCard = ({  // this will be exported
  image,
  title,
  category,
  price,
}: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">

      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image} // this title name will be give ni n the products.ts file and other properties too 
          alt={title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2 p-5 ">

        <p className="text-sm uppercase tracking-widest text-gray-400">
          {category}
        </p>

        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-lg font-bold text-amber-600">
          ${price}
        </p>

        <button className="mt-3 w-full rounded-lg bg-black py-3 text-white transition hover:bg-amber-600 cursor-pointer" >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;