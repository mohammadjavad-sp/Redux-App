import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeOffCanvas, toggleDarkMode } from "../../Redux/slices/globals";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const OffCanvas = () => {
  const [nowLanguage, setNowLanguage] = useState("en");
  const { t } = useTranslation();
  const { darkMode } = useSelector((store) => store.globals);
  const dispatch = useDispatch();
  const changeLanguages = () => {
    if (i18n.language == "fa") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("fa");
    }
  };

  useEffect(() => {
    if (i18n.language == "fa") {
      setNowLanguage("en");
    } else {
      setNowLanguage("fa");
    }
  }, [i18n.language]);

  return (
    <>
      <aside
        data-aos={i18n.language == "fa" ? "fade-left" : "fade-in"}
        className="h-svh w-[300px] bg-white dark:bg-dark1 flex flex-col shadow-lg"
      >
        <div className="flex justify-between p-3 items-center">
          <img src={logo} className="w-12" />

          <div className="flex gap-2">
            <button
              className="bg-slate-100 dark:bg-dark2 dark:hover:bg-slate-600 size-10 flex items-center justify-center rounded-md hover:bg-slate-200 "
              onClick={() => dispatch(toggleDarkMode())}
            >
              {darkMode ? (
                <MdOutlineLightMode size={25} className="dark:text-slate-100" />
              ) : (
                <MdOutlineDarkMode size={25} />
              )}
            </button>
            <button
              className="bg-slate-100 size-10 flex items-center justify-center rounded-md hover:bg-slate-200 dark:bg-dark2 dark:text-slate-100"
              onClick={changeLanguages}
            >
              {nowLanguage}
            </button>
            <IoClose
              size={40}
              className="dark:text-slate-100"
              onClick={() => dispatch(closeOffCanvas())}
            />
          </div>
        </div>
        <ul className="p-4 flex flex-col flex-1 dark:text-slate-100 divide-y-2">
          <li className="h-12 flex items-center">
            <NavLink className="block w-full" to="/home"> {t("menu.home")}</NavLink>
          </li>
          <li className="h-12 flex items-center">
            <NavLink className="block w-full" to="/courses"> {t("menu.courses")}</NavLink>
          </li>
          <li className="h-12 flex items-center">
            <NavLink className="block w-full" to="/articles">{t("menu.articles")}</NavLink>
          </li>
          <li className="h-12 flex items-center">
            <NavLink className="block w-full" to="/about"> {t("menu.about")}</NavLink>
          </li>
          <li className="h-12 flex items-center">
            <NavLink className="block w-full" to="/contact"> {t("menu.contact")} </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default OffCanvas;
