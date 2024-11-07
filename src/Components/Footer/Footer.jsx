import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import enamad from "../../assets/images/footer/enamad.png";
import samandehi from "../../assets/images/footer/samandehi.png";
import i18next from "i18next";
import { t } from "i18next";

const Footer = () => {
  return (
    <>
      <footer
        className={`w-full pb-10 bg-white dark:bg-dark1 dark:!shadow-none ${
          i18next.language == "en" && "ltr"
        }`}
        style={{ boxShadow: "1px 1px 5px gray" }}
      >
        <div className="w-[88%] mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center py-10 border-b-2 border-b-[#BA08FA]">
          <div>
            <p className="text-[30px] dark:text-slate-300 font-yekanEB">
            {t("footer.phone")}:{" "}
              <span className={`font-yekanN font-bold text-[#6363C1] dark:text-purple-500 ${i18next.language == "en" && "font-sans" }`}>
                {i18next.language == "fa"?"7654321-021":"021-7654321"}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaInstagram size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaTelegram size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaWhatsapp size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaXTwitter size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaLinkedinIn size={25} />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-[88%] mx-auto items-stretch lg:pt-6">
          <div className="lg:w-4/12 pt-10 flex flex-col justify-between w-full">
            <div>
              <img src={logo} className="w-16 mx-auto lg:mx-0 mb-5" />
              <p
                className={`lg:pl-16 text-justify leading-[30px] dark:text-slate-200 ${
                  i18next.language == "en" && "lg:!pl-0 lg:pr-20"
                }`}
              >
                {t("footer.text")}
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-10 lg:w-8/12 w-full py-16 sm:justify-between justify-evenly ">
            <div className="">
              <h3 className="font-yekanEB mb-5 dark:text-slate-100">
              {t("footer.access")}
              </h3>
              <ul className="leading-[40px] dark:text-slate-200">
                <li>{t("footer.contactUs")}</li>
                <li>{t("footer.aboutUs")}</li>
                <li>{t("footer.cart")}</li>
                <li>{t("footer.myAccount")}</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-yekanEB mb-5 dark:text-slate-100">
              {t("footer.sections")}
              </h3>
              <ul className="leading-[40px] dark:text-slate-200">
                <li>{t("footer.subscription")}</li>
                <li>{t("footer.Blog")}</li>
                <li>{t("footer.store")}</li>
                <li>{t("footer.payment")}</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-yekanEB mb-5 text-center sm:text-start dark:text-slate-100">
              {t("footer.icons")}
              </h3>
              <div className="flex  gap-3">
                <img src={enamad} className="w-24" alt="" />
                <img src={samandehi} className="w-24" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row w-[88%] mx-auto items-center md:gap-10 gap-3`}>
          <p className="w-fit text-[14px] dark:text-slate-300">
          {t("footer.copyRight")}
          </p>
          <div className="md:flex-1 w-full bg-[#6363C1] h-[2px]"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
