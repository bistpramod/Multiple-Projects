const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Logo */}
        <h2 className="text-3xl font-bold">Multiple Bits</h2>
        <p className="mt-2 text-slate-400">
          Premium products. Modern shopping.
        </p>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap gap-6">
          <a href="#featured" className="hover:text-amber-400 transition">
            Featured
          </a>

          <a href="#about" className="hover:text-amber-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-amber-400 transition">
            Contact
          </a>

          <a href="/cart" className="hover:text-amber-400 transition">
            Cart
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-700 pt-6 flex justify-between items-center">

          <p className="text-sm text-slate-400">
            © 2026 Multiple Bits
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400">
              GitHub
            </a>

            <a href="#" className="hover:text-amber-400">
              Instagram
            </a>

            <a href="#" className="hover:text-amber-400">
              LinkedIn
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;