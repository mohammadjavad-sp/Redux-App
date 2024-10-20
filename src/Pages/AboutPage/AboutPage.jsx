import { Button } from "flowbite-react";
import pic from "../../assets/images/about/person-ok.webp";
import shape1 from "../../assets/images/about/Untitled-1.png";
import up from "../../assets/images/about/up.svg";
import post from "../../assets/images/about/post.svg";
import air from "../../assets/images/about/iran-air-icon-2.svg";
import khodro from "../../assets/images/about/iran-khodro-icon.svg";
import shape2 from "../../assets/images/about/svgexport-3.svg";
import cheshm from "../../assets/images/about/cheshm-andaz.png";
import footerShape from "../../assets/images/about/svgexport-4.png";
import footerShapeDark from "../../assets/images/about/svgexport-4(dark).png";
import logo from "../../assets/images/about/logoipsum-297.svg";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  const { darkMode } = useSelector((store) => store.globals);
  return (
    <>
      <header
        className={`flex w-full flex-col lg:flex-row mx-auto items-center bg-[#1C1732] lg:px-24 px-7 lg:pt-24 pt-10 gap-14 ${
          i18next.language === "en" && "ltr"
        }`}
      >
        <div className="lg:w-7/12 order-2 lg:order-1">
          <h1 className="text-white lg:text-[35px] sm:text-[25px] text-[20px] font-pinarEB mb-5">
            <span className="text-[#6AC847]">{t("aboutSlogen1")}</span>{" "}
            {t("aboutSlogen2")}
          </h1>
          <p className="text-white text-justify lg:text-[16px] text-[14px] leading-loose mb-5">
            {t("aboutText")}
          </p>
          <div className="flex gap-5">
            <Button size="md" className="bg-[#5BC91E]">
              {t("showCourses")}
            </Button>
            <Button size="md" className="bg-[#FFFF00] text-black ">
              {t("Request")}
            </Button>
          </div>
        </div>
        <div className="lg:w-5/12 order-1 lg:order-2">
          <img src={pic} className="" />
        </div>
      </header>
      <div
        className={`bg-[#1C1732] pt-10 px-7 ${
          i18next.language === "en" && "ltr"
        }`}
      >
        <h2 className="text-white text-center md:text-[25px] text-[20px]">
          {t("onlineTraining")}
        </h2>
        <p className="text-[#FF9600] md:text-[25px] text-[18px] mt-3 text-center">
          {t("textTraining")}
        </p>
        <div className="flex flex-wrap justify-center items-stretch  mx-auto gap-10 py-10">
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              {t("guarantee1")}
            </h3>
            <p className="text-white text-[14px] leading-loose">
              {t("guaranteeText")}
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              {t("guarantee2")}
            </h3>
            <p className="text-white text-[14px] leading-loose">
              {t("guaranteeText")}
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              {t("guarantee3")}
            </h3>
            <p className="text-white text-[14px] leading-loose">
              {t("guaranteeText")}
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4 ">
              {t("guarantee4")}
            </h3>
            <p className="text-white text-[14px] leading-loose">
              {t("guaranteeText")}
            </p>
          </div>
        </div>
        <div className="flex px-7 flex-col lg:flex-row gap-7 lg:gap-0 mx-auto justify-between py-20">
          <div className="md:text-[28px] text-[20px] text-center ">
            <p className="text-white">{t("brandsTitr")}</p>
            <p className="text-[#FF9600]">{t("brandsText")}</p>
          </div>
          <div className="flex flex-1 flex-wrap items-center lg:justify-end justify-center gap-10">
            <img src={up} alt="" />
            <img src={post} alt="" />
            <img src={air} alt="" />
            <img src={air} alt="" />
            <img src={khodro} alt="" />
            <img src={up} alt="" />
          </div>
        </div>
      </div>
      <img src={shape1} className="text-red-500" />

      <section
        className={`flex flex-col items-center md:my-20 my-10 w-[88%] mx-auto ${
          i18next.language === "en" && "ltr"
        }`}
      >
        <div className="relative">
          <img src={shape2} className="w-[300px]" />
          <h2
            className={`absolute top-4 right-12 text-[23px] dark:text-slate-100 ${
              i18next.language === "en" && "!right-8 top-5"
            }`}
          >
            {t("acTitr")}
          </h2>
        </div>
        <p className="text-[20px] my-8 text-rang1 text-justify lg:text-center dark:text-slate-200">
          {t("acText")}
        </p>
        <img src={cheshm} alt="" />
      </section>

      <footer
        className={`w-full bg-[#1C1732] ${i18next.language === "en" && "ltr"}`}
      >
        <img src={darkMode ? footerShapeDark : footerShape} />
        <div className="flex flex-col items-center py-20 gap-7 px-7">
          <img src={logo} className="w-44" />
          <p className="text-white">{t("fooTitr")}</p>
          <div className="flex flex-wrap justify-center text-white gap-5">
            <FaInstagram size={30} />
            <FaTelegram size={30} />
            <FaWhatsapp size={30} />
            <FaXTwitter size={30} />
            <FaYoutube size={30} />
            <FaLinkedin size={30} />
          </div>
          <p className="text-blue-500">© SP 2024</p>
          <p className="text-white text-center leading-[30px]">
            {t("fooCopyRight1")}{" "}
            <span className="text-blue-500">{t("fooCopyRight2")}</span>
            {t("fooCopyRight3")}
          </p>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
