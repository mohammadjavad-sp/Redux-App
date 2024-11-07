import imgHeader from "../../assets/images/homePage/programer-boy.png";
import star from "../../assets/images/homePage/star.svg";
import emoji from "../../assets/images/homePage/emoji.svg";
import member from "../../assets/images/homePage/member.svg";
import mem1 from "../../assets/images/homePage/mem1.jpg";
import mem2 from "../../assets/images/homePage/mem2.jpg";
import mem3 from "../../assets/images/homePage/mem3.jpg";
import mem4 from "../../assets/images/homePage/mem4.webp";
import plus from "../../assets/images/homePage/plus.svg";
import shape1 from "../../assets/images/homePage/shape1.svg";
import shape2 from "../../assets/images/homePage/shape2.svg";
import { Button } from "flowbite-react";
import DemoCourses from "../../Components/DemoCourses/DemoCourses";
import CoursesSwiper from "../../Components/CoursesSwiper/CoursesSwiper";
import Footer from "../../Components/Footer/Footer";
import ReviewsSwiper from "../../Components/ReviewsSwiper/ReviewsSwiper";
import { FaBrain, FaDatabase, FaFingerprint, FaReact } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import arrow from "../../assets/images/homePage/arrow.png";
import person from "../../assets/images/homePage/person-ok.webp";
import message from "../../assets/images/homePage/message-1.svg";
import Timer from "../../Components/Timer/Timer";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState } from "react";
const HomePage = () => {
  const { t } = useTranslation();
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const inputsHandler=()=>{
    setName("")
    setEmail("")
  }
  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{ className: "!bg-slate-200" }}
      />
      <header
        className={`bg-[#F4F5F7] dark:bg-dark3 pt-10 xl:pt-0 ${
          i18next.language == "en" && "ltr"
        }`}
      >
        <div className="flex flex-col lg:flex-row w-[88%] justify-between items-center mx-auto">
          <div className="lg:w-[50%] xl:pl-24 flex flex-col gap-7 items-center lg:items-start">
            <div className={`flex `}>
              <div
                className={`bg-[#FF3D3D] w-max rounded-full flex relative items-center ${
                  i18next.language == "en" && "ltr"
                }`}
              >
                <img
                  src={star}
                  className={`size-[40px] absolute translate-x-1 ${
                    i18next.language == "en" && "translate-x-[-2px]"
                  }`}
                />
                <p
                  className={`pr-12 pl-3 py-1 text-white text-[14px] ${
                    i18next.language == "en" && "pr-3 pl-[45px]"
                  }`}
                >
                  {t("nextBootCamp")}
                </p>
              </div>
              <p
                className={`flex items-center dark:text-white text-[14px] mr-2 font-yekanB ${
                  i18next.language == "en" && "ml-2"
                }`}
              >
                {t("winter")}{" "}
                <span
                  className={`font-yekanN ${
                    i18next.language == "en" &&
                    "font-sans font-bold ml-1"
                  }`}
                >
                  {t("year")}
                </span>
                <img src={emoji} className="size-4 mr-1" />
              </p>
            </div>
            <h1 className="lg:text-[45px] text-[30px] font-pinarEB text-rang1 dark:text-slate-200 text-center lg:text-start">
              {t("siteSlogen")}
            </h1>
            <p className="lg:text-[17px] text-[14px] text-[#9a9fa7] text-center lg:text-start leading-[30px]">
              {t("siteSlogen2")}
            </p>
            <div
              className={`flex flex-col sm:flex-row items-center justify-between sm:w-[468px] px-10 py-5 sm:h-[120px] lg:bg-[#EBECEE] dark:bg-dark2 rounded-xl lg:p-5 gap-7 lg:gap-0 ${
                i18next.language == "en" && "rtl"
              }`}
            >
              <Button
                className="rounded-full"
                size="xl"
                gradientDuoTone="purpleToPink"
              >
                <Link to="/courses">{t("showCourses")}</Link>
              </Button>
              <div className="flex flex-col gap-3 items-center">
                <div className="flex">
                  <img
                    src={mem1}
                    className="rounded-full size-10 z-40 ring-4 ring-[#EBECEE]"
                  />
                  <img
                    src={mem2}
                    className="rounded-full size-10 z-30 ring-4 ring-[#EBECEE]"
                  />
                  <img
                    src={mem3}
                    className="rounded-full size-10 z-20 ring-4 ring-[#EBECEE]"
                  />
                  <img
                    src={mem4}
                    className="rounded-full size-10 z-10 ring-4 ring-[#EBECEE]"
                  />
                </div>
                <div className={`flex ${i18next.language == "en" && "ltr"}`}>
                  <img src={member} alt="" />
                  <p className="dark:text-white">
                    <span
                      className={`font-yekanN ${
                        i18next.language == "en" && "font-sans font-bold"
                      }`}
                    >
                      700
                    </span>
                    k+ {t("student")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:w-[50%]">
            <img src={plus} className="absolute z-10" />
            <img src={imgHeader} className="" />
            <img src={shape1} className="absolute left-0 bottom-16" />
            <img
              src={shape2}
              className="absolute hidden lg:block left-0 bottom-24"
            />
          </div>
        </div>
      </header>

      <DemoCourses />

      <CoursesSwiper />

      <ReviewsSwiper />

      <section className="bg-[#F4F5F7] dark:bg-dark3 text-center lg:py-20 py-10">
        <p className="font-yekanEB md:text-[28px] text-[22px] text-[#2A2D53] dark:text-slate-100 ">
          {t("learning.titr")}
        </p>
        <p className="text-[#2A2D53] dark:text-slate-300 mt-3">
          {t("learning.text")}
        </p>
        <div
          className={` mx-auto mt-10 flex lg:justify-between flex-wrap w-[88%] gap-10 lg:gap-0 justify-center ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] dark:bg-gradient-to-t from-dark1 to-dark3 shadow-lg p-6">
              <FaFingerprint
                size={40}
                className="text-[#555775] dark:text-slate-400"
              />
            </div>
            <p className="text-[#555775] dark:text-slate-300 mt-3">
              {t("learning.front")}
            </p>
          </div>
          <img
            src={arrow}
            className={`rotate-90 hidden lg:block w-5 object-contain ${
              i18next.language == "en" && "rotate-[280deg]"
            } `}
          />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] dark:bg-gradient-to-t from-dark1 to-dark3 shadow-lg p-6">
              <FaDatabase
                size={40}
                className="text-[#555775] dark:text-slate-400"
              />
            </div>
            <p className="text-[#555775] dark:text-slate-300 mt-3">
              {t("learning.back")}
            </p>
          </div>
          <img
            src={arrow}
            className={`rotate-90 hidden lg:block w-5 object-contain ${
              i18next.language == "en" && "rotate-[280deg]"
            } `}
          />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] dark:bg-gradient-to-t from-dark1 to-dark3 shadow-lg p-6">
              <MdOutlineSecurity
                size={40}
                className="text-[#555775] dark:text-slate-400"
              />
            </div>
            <p className="text-[#555775] dark:text-slate-300 mt-3">
              {t("learning.hack")}
            </p>
          </div>
          <img
            src={arrow}
            className={`rotate-90 hidden lg:block w-5 object-contain ${
              i18next.language == "en" && "rotate-[280deg]"
            } `}
          />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] dark:bg-gradient-to-t from-dark1 to-dark3 shadow-lg p-6">
              <FaReact
                size={40}
                className="text-[#555775] dark:text-slate-400"
              />
            </div>
            <p className="text-[#555775] dark:text-slate-300 mt-3">
              {t("learning.frame")}
            </p>
          </div>
          <img
            src={arrow}
            className={`rotate-90 hidden lg:block w-5 object-contain ${
              i18next.language == "en" && "rotate-[280deg]"
            } `}
          />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] dark:bg-gradient-to-t from-dark1 to-dark3 shadow-lg p-6">
              <FaBrain
                size={40}
                className="text-[#555775] dark:text-slate-400"
              />
            </div>
            <p className="text-[#555775] dark:text-slate-300 mt-3">
              {t("learning.portfolio")}
            </p>
          </div>
          <img
            src={arrow}
            className={`rotate-90 hidden lg:block w-5 object-contain ${
              i18next.language == "en" && "rotate-[280deg]"
            } `}
          />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] dark:bg-gradient-to-t from-dark1 to-dark3 shadow-lg p-6">
              <GrUserWorker
                size={40}
                className="text-[#555775] dark:text-slate-400"
              />
            </div>
            <p className="text-[#555775] dark:text-slate-300 mt-3">
              {t("learning.recruitment")}
            </p>
          </div>
        </div>
      </section>

      <section
        className={`w-full bg-[#F4F5F7] dark:bg-dark3 lg:py-20 py-10 ${
          i18next.language == "en" && "ltr"
        }`}
      >
        <div className="w-[80%] flex flex-col lg:flex-row justify-between mx-auto items-center gap-10">
          <div>
            <img src={person} className="lg:w-[450px]" alt="" />
          </div>
          <div className="flex items-center flex-col">
            <Timer />
            <img src={message} className="w-32" alt="" />
            <p className="md:text-[29px] dark:text-slate-200 text-[20px] font-yekanEB mt-2 text-[#474B53]">
              {t("timer.titr")}
            </p>
            <p className="md:text-[20px] dark:text-slate-300 font-yekanL mt-5">
              {t("timer.text")}
            </p>

            <div
              className={`rounded-md bg-white dark:bg-dark1 shadow-xl p-2 mt-10 flex w-[95%] justify-between ${
                i18next.language == "en" && "ltr"
              }`}
            >
              <input
                type="text"
                placeholder={t("timer.name")}
                className="bg-transparent text-[12px] sm:text-[16px] border-0 dark:text-white text-black w-[40%] !ring-0"
                onChange={(e)=>setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                placeholder={t("timer.email")}
                className="bg-transparent text-[12px] sm:text-[16px] border-0 text-black dark:text-white w-[40%] !ring-0"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
              <Button
                color="failure"
                className="w-[60px] h-[60px] rounded-md flex justify-center items-center"
                onClick={inputsHandler}
              >
                {t("timer.send")}
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
