const CartDrawer = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-96 bg-white shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b p-5">

        <h2 className="text-2xl font-bold">
          Shopping Cart
        </h2>

        <button className="text-2xl">
          ✕
        </button>

      </div>

      {/* Cart Items */}
      <div className="space-y-5 p-5">

        {/* Single Cart Item */}

        <div className="flex gap-4 rounded-lg border p-3">

          <img
            src="https://picsum.photos/100"
            alt="Product"
            className="h-24 w-24 rounded-lg object-cover"
          />

          <div className="flex-1">

            <h3 className="font-semibold">
              Running Shoes
            </h3>

            <p className="text-sm text-gray-500">
              Shoes
            </p>

            <p className="mt-2 font-bold text-amber-600">
              $99
            </p>

            <div className="mt-3 flex items-center gap-3">

              <button className="rounded bg-gray-200 px-3 py-1">
                -
              </button>

              <span>1</span>

              <button className="rounded bg-gray-200 px-3 py-1">
                +
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="absolute bottom-0 w-full border-t bg-white p-5">

        <div className="mb-4 flex justify-between">

          <span className="font-semibold">
            Total
          </span>

          <span className="font-bold text-amber-600">
            $99
          </span>

        </div>

        <button className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-amber-600">
          Checkout
        </button>

      </div>

    </div>
  );
};

export default CartDrawer;