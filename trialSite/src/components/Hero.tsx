// import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#F8F5F0]">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between px-6 lg:px-12">

        {/* Left Side */}
        <div className="max-w-xl">
          <p className="mb-3 uppercase tracking-[6px] text-sm text-gray-500">
            New Collection
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
            Modern
            <br />
            Furniture
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover beautifully crafted furniture designed to bring
            comfort, elegance, and simplicity into your home.
          </p>

          <button className="mt-10 rounded-md bg-black px-8 py-4 text-white transition duration-300 hover:bg-amber-600">
            Shop Now
          </button>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex">
          <img
            // src={heroImage}
            alt="Chair"
            className="w-135 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;