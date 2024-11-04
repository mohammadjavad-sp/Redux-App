import phone from "../../assets/images/contact/phone.png";
import wave from "../../assets/images/contact/wave.svg";
import waveDark from "../../assets/images/contact/wave-dark.png";
import shape from "../../assets/images/contact/shape.svg";
import quest1 from "../../assets/images/contact/quests.webp";
import quest2 from "../../assets/images/contact/quest2.svg";
import quest2Dark from "../../assets/images/contact/quest2-dark.png";
import { Button, Label, TextInput } from "flowbite-react";
import Acordion from "../../Components/Accordion/Accordion";
import styles from "./ContactPage.module.css";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState } from "react";
const ContactPage = () => {
  const { t } = useTranslation();
  const { darkMode } = useSelector((store) => store.globals);
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const inputsHandler=()=>{
    setName("")
    setEmail("")
  }
  return (
    <>
      <header className="bg-[#1C1732] lg:pt-20 pt-7 ">
        <div
          className={`flex items-center flex-col lg:flex-row w-[70%] mx-auto justify-between ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <div className="text-center leading-[50px]">
            <p className="md:text-[35px] text-[25px] text-[#F56913]">
              {t("isQuest")}
            </p>
            <p className="md:text-[24px] text-[16px] text-white">
              {t("isQuestText")}
            </p>
            <p
              className={`text-[30px] text-[#FE02FF] font-yekanN ${
                i18next.language == "en" && "!font-sans font-bold"
              }`}
            >
              09012345678
            </p>
          </div>
          <div>
            <img src={phone} alt="" />
          </div>
        </div>
        <img
          src={darkMode ? waveDark : wave}
          className="rotate-180 w-full mt-7 lg:mt-0"
          alt=""
        />
      </header>

      <section className="bg-white dark:bg-dark1 translate-y-[-1px] flex flex-col items-center lg:py-20 pt-10 mx-auto">
        <div
          className={`relative flex flex-col items-center px-5 ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <img src={shape} className="w-[300px]" />
          <h2
            className={`absolute top-4 lg:right-[245px] text-[23px] dark:text-slate-100 ${
              i18next.language == "en" && "lg:right-48"
            }`}
          >
            {t("ContactUsForm")}
          </h2>
          <p className="text-[#DD7600] mt-5 lg:text-[30px] text-[20px] text-center">
            {t("ContactUsText")}
          </p>
        </div>
        <div
          className={`lg:py-10 py-5 w-[88%] mx-auto ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <div className={`flex w-full flex-col gap-4`}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value={t("formName")} />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing="md"
                className="w-full"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value={t("formEmail")} />
              </div>
              <TextInput id="base" type="text" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value={t("formSubject")} />
              </div>
              <TextInput id="base" type="text" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="large" value={t("formMessage")} />
              </div>
              <textarea
                name=""
                style={{ resize: "none" }}
                className="w-full rounded-lg bg-[#F9FAFB] dark:bg-[#374151] dark:border-[#4B5563] border-[#D1D5DB] h-44"
              ></textarea>
            </div>
          </div>
          <Button color="purple" className={`mt-5 px-10`}>
            {t("formBtn")}
          </Button>
        </div>
      </section>

      <section className="bg-white dark:bg-dark1">
        <div
          className={`flex items-start flex-col lg:flex-row w-[88%] justify-between mx-auto gap-10 ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <div className="lg:w-[50%]">
            <img src={quest1} alt="" />
          </div>
          <div className="lg:w-[50%] w-full">
            <img
              src={darkMode ? quest2Dark : quest2}
              className=" block mx-auto w-28"
            />
            <div>
              <p className="mt-16 text-red-500 text-xl mb-4">
                {t("FAQ.faqTitr")}
              </p>
              <Acordion />
            </div>
          </div>
        </div>
      </section>

      <div className="lg:pt-24 pt-14 bg-white dark:bg-dark1">
        <div
          className={`${
            styles.khabarName
          } w-full pt-16 pb-10 flex flex-col items-center justify-center px-5 ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <p className="text-[#FF9F07] font-yekanEB text-[20px] text-center">
            {t("offerTitr")}
          </p>
          <p className="text-white text-[16px] mt-3 text-center">
            {t("offerText")}
          </p>
          <div className="flex rounded-full justify-between mt-10 bg-slate-500/10 p-2">
            <input
              type="text"
              placeholder={t("offerName")}
              className="bg-transparent text-[12px] sm:text-[16px] border-0 text-white w-[40%] !ring-0"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder={t("offerEmail")}
              className="bg-transparent text-[12px] sm:text-[16px] border-0 text-white w-[40%] !ring-0"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
            <Button
              color="failure"
              className="w-[60px] h-[60px] rounded-full flex justify-center items-center"
              onClick={inputsHandler}
            >
              {t("offerBtn")}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
