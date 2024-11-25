import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        // console.log("testing");
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-5 bg-sky-900 shadow" : "py-5";

  return (
    <div className={`navbar fixed transition-all bg-sky-700 w-full ${scrollActive}`}>
      <div className="container mx-auto px-5">
        <div className="navbar-box md:mx-20 sm:mx-auto flex items-center justify-between">
          <div className="logo flex items-center gap-3">
            <h1 className="font-bold text-2xl text-white">IPERSONIC</h1>
            <a href="#" className="bg-orange-500 px-2 py-2 md:hover:bg-orange-600 text-white font-medium">Mulai Ujian<i className="ri-play-fill"></i></a>
          </div>
          <ul
            className={`flex lg:gap-12 md:flex-row md:static md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:p-0 md:m-0 md:transition-none gap-4 fixed ${menuActive} top-1/2  -translate-y-1/2 flex-col px-8 py-6 sm:rounded-shadow shadow-lime-500 bg-lime-200 font-bold text-black transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line text-2xl md:hidden block"></i>
              <a href="#home" className="opacity-75 font-medium text-white">
                Tipe Kepribadian
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-2-line text-2xl md:hidden block"></i>
              <a href="#about" className="opacity-75 font-medium text-white">
                Bahasa Indonesia
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

