import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="bg-[url('/public/bg-nav.png')] bg-cover bg-no-repeat bg-top lg:bg-bottom h-[500px] md:h-[800px] relative">
      <div className="flex justify-between max-w-[1400px] mx-auto p-4 text-xl">
        <Link to="/" className="lg:text-2xl text-lg">
          Anchor Away
        </Link>
        <div
          className={`${
            isOpen
              ? "flex flex-col justify-center items-center h-screen w-screen fixed top-0 left-0 right-0 bottom-0 bg-white z-50"
              : "hidden"
          } md:flex md:flex-row md:space-x-8 items-center absolute md:static  w-full md:w-auto p-4 md:p-0 bg-transparent gap-3`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/yachts">Yachts</Link>
          <Link to="/locations">Location</Link>
        </div>
        <div className="md:hidden cursor-pointer absolute top-4 right-5 z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X color="black" size={22}></X>
            ) : (
              <Menu color="black" size={22}></Menu>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
