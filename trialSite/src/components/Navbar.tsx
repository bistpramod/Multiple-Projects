import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },

  // { to: "/shop", label: "Shop" }, // these navlinks are for the new page which is not required
  // { to: "/featured", label: "Featured" },

  // { to: "/about", label: "About" },
  // { to: "/contact", label: "Contact" },

  // CHANGED: These are now section links on the same page.
  { href: "#featured", label: "Featured" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },

  // Cart is still a separate page.
  { to: "/cart", label: "Cart🛒" },
  { href: "#footer", label: "Footer" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-slate-900 text-white"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <NavLink
          to="/"
          end
          className="text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-600"
        >
          Multiple Bits
        </NavLink>

        <ul className="flex items-center gap-1">

          {/* CHANGED: We now check each object in navLinks */}
          {navLinks.map((link) => (
            <li key={link.label}>

              {/* CHANGED: If the object has 'to', it's a page route (Home, Cart) */}
              {link.to ? (
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ) : (
                /* CHANGED: If the object has 'href', it's a section on the same page */
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </a>
              )}

            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;