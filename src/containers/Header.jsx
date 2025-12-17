import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/svg/turkuaz-logo.svg";
import evalupeLogo from "../assets/svg/evalupe-logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Yazlık Terlik", path: "/yazlik-terlik" },
    { name: "Kışlık Terlik", path: "/kislik-terlik" },
    { name: "El Emeği", path: "/el-emegi" },
    { name: "Özel Koleksiyon", path: "/ozel-koleksiyon" },
    { name: "Plaj ve Spor Ürünleri", path: "/plaj-ve-spor-urunleri" },
    { name: "Otel Ürünleri", path: "/otel-urunleri" },
    { name: "After Party", path: "/after-party" },
    { name: "Oyuncak", path: "/oyuncak" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-[1px_1px_8px_0px_rgba(0,_0,_0,_0.35)]">
      <div className="container mx-auto max-w-6xl px-6 lg:px-0">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-black tracking-tight hover:opacity-80 transition-opacity"
            onClick={handleLinkClick}
          >
            <img src={logo} alt="logo" className="w-40 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 flex-wrap justify-end max-w-2xl">
            {categories.map((category) => {
              const active = isActive(category.path);
              return (
                <Link
                  key={category.path}
                  to={category.path}
                  className={`group relative text-xs font-medium pb-1 transition-colors duration-200 whitespace-nowrap ${
                    active ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {category.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                      active
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-black tracking-tight hover:opacity-80 transition-opacity"
            onClick={handleLinkClick}
          >
            <img
              src={evalupeLogo}
              alt="evalupe"
              className="w-full h-20 object-contain"
            />
          </Link>
          {/* Mobile/Tablet Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col py-4 max-h-[500px] overflow-y-auto">
            {categories.map((category) => {
              const active = isActive(category.path);
              return (
                <Link
                  key={category.path}
                  to={category.path}
                  onClick={handleLinkClick}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-black bg-gray-50 border-l-4 border-black"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
