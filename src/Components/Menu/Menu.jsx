import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logoipsum-332.svg";
import styles from "./Menu.module.css";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import OffCanvas from "./OffCanvas";
import { useDispatch, useSelector } from "react-redux";
import {
  closeOffCanvas,
  openOffCanvas,
  toggleDarkMode,
} from "../../Redux/slices/globals";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import i18n from "../../i18n";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [nowLanguage, setNowLanguage] = useState("fa");
  const dispatch = useDispatch();
  const { offCanvas, darkMode } = useSelector((store) => store.globals);
  if (offCanvas) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const scrollHandler = () => {
    if (scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [lastScrollY]);

  const { addedToCart } = useSelector((store) => store.cart);

  const changeLanguages = () => {
    if (i18n.language == "fa") {
      i18n.changeLanguage("en");
      setNowLanguage("fa")
    } else {
      i18n.changeLanguage("fa");
      setNowLanguage("en")
    }
  };

  return (
    <>
      <nav
        className={`w-full h-[70px] z-[999] flex items-center justify-between sticky bg-white dark:bg-dark1 transition-all duration-300 ${
          isVisible ? `top-0 shadow-md` : `top-[-70px]`
        }`}
      >
        {offCanvas && (
          <div
            className="absolute top-0 bg-[#0000005e] w-full h-screen z-50"
            onClick={() => dispatch(closeOffCanvas())}
          >
            <OffCanvas />
          </div>
        )}
        <div className="flex justify-between w-11/12 mx-auto">
          <span className="lg:hidden flex justify-center items-center bg-slate-100 size-10 rounded-md dark:bg-dark2 dark:text-slate-100">
            <TbMenuDeep size={30} onClick={() => dispatch(openOffCanvas())} />
          </span>
          <div className="flex lg:flex-1">
            <img src={logo} alt="" />
            <ul className="justify-center items-center gap-10 hidden lg:flex lg:mr-14 dark:text-white">
              <li className="hover:text-teal-500 dark:hover:text-teal-400">
                <NavLink to="/Redux-App/home">صفحه نخست</NavLink>
              </li>
              <li className="hover:text-teal-500 dark:hover:text-teal-400">
                <NavLink to="/Redux-App/courses">دوره ها</NavLink>
              </li>
              <li className="hover:text-teal-500 dark:hover:text-teal-400">
                <NavLink to="/Redux-App/articles">مقالات</NavLink>
              </li>
              <li className="hover:text-teal-500 dark:hover:text-teal-400">
                <NavLink to="/Redux-App/about">درباره ما</NavLink>
              </li>
              <li className="hover:text-teal-500 dark:hover:text-teal-400 ">
                <NavLink to="/Redux-App/contact">تماس با ما</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex">
            <div className="flex items-center lg:ml-5 gap-3">
              <Link
                to="/Redux-App/cart"
                className="bg-slate-100 dark:bg-dark2 dark:hover:bg-slate-600 size-10 flex items-center justify-center rounded-md hover:bg-slate-200 dark:text-slate-200 relative"
              >
                <FaCartShopping size={22} />
                {addedToCart > 0 && (
                  <span className="absolute top-[-10px] right-[-10px] size-5 flex items-center justify-center text-sm rounded-full bg-slate-500 font-yekanN text-white">
                    {addedToCart}
                  </span>
                )}
              </Link>
              <button
                className="bg-slate-100 dark:bg-dark2 dark:hover:bg-slate-600 size-10 flex items-center justify-center rounded-md hover:bg-slate-200"
                onClick={() => dispatch(toggleDarkMode())}
              >
                {darkMode ? (
                  <MdOutlineLightMode
                    size={25}
                    className="dark:text-slate-100"
                  />
                ) : (
                  <MdOutlineDarkMode size={25} />
                )}
              </button>
              <button
                className="bg-slate-100 size-10 flex items-center justify-center rounded-md hover:bg-slate-200"
                onClick={changeLanguages}
              >
                {nowLanguage}
              </button>
            </div>
            <button className={`${styles.button} hidden lg:block`}>ورود</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
