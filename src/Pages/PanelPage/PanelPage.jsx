import { MdOutlineDashboard, MdOutlinePayment } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import userLogo from "../../assets/images/user.png";
import { FaRegBell, FaRegFolderOpen, FaRegUser, FaUser } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";
import { HiOutlineTicket } from "react-icons/hi";
import { BsRocketTakeoff } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const PanelPage = () => {
  const { user, picture } = useSelector((store) => store.login);
  const [langDirection, setLangDirection] = useState("");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    setLangDirection(i18n.language === "en" ? "ltr" : "rtl");
  }, [i18n.language]);

  return (
    <>
      <section
        className={`lg:w-[92%] mx-auto lg:my-10 flex justify-between gap-10 ${langDirection}`}
      >
        <div className="w-[20%] hidden lg:block">
          <img src={logo} className="block mx-auto w-20" />
          <ul className="mt-10 flex flex-col gap-3">
            <li className="flex cursor-pointer items-center gap-2 bg-[#2ED573] p-2 rounded-lg text-white">
              <MdOutlineDashboard size={25} />
              {t("panel.dashboard")}
            </li>
            <li className="flex cursor-pointer items-center gap-2 p-2 text-[#3F3F46] dark:text-slate-100">
              <FaRegFolderOpen size={25} />
              {t("panel.courses")}
            </li>
            <li className="flex cursor-pointer items-center gap-2 p-2 text-[#3F3F46] dark:text-slate-100">
              <IoChatbubblesOutline size={25} />
              {t("panel.tickets")}
            </li>
            <li className="flex cursor-pointer items-center gap-2 p-2 text-[#3F3F46] dark:text-slate-100">
              <FaRegUser size={25} />
              {t("panel.info")}
            </li>
            <li className="flex cursor-pointer items-center gap-2 p-2 text-[#3F3F46] dark:text-slate-100">
              <IoMdExit size={25} />
              {t("panel.exit")}
            </li>
          </ul>
        </div>
        <div className="lg:w-[80%] w-full bg-[#F3F4F6] dark:bg-dark2 lg:rounded-3xl p-10">
          <div className="flex justify-between items-center sm:text-2xl text-lg">
            <div className="flex items-center gap-5">
              {picture ? (
                <img
                  src={picture}
                  className={`rounded-full size-20 bg-gray-200 `}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              ) : (
                <img
                  src={ userLogo}
                  className={`rounded-full size-20 bg-gray-200 p-3`}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              )}

              <p
                className={`dark:text-slate-100 ${
                  i18n.language == "en" && "rtl"
                }`}
              >
                {user} {t("panel.titr")}
              </p>
            </div>
            <div className="flex gap-5">
              <Dropdown
                label={
                  <FaRegBell
                    size={25}
                    className="bg-white dark:bg-dark1 dark:text-slate-100 rounded-full size-12 p-3"
                  />
                }
                arrowIcon={false}
                inline
                className="md:w-[300px] w-[250px] mt-1 p-3 rounded-xl"
              >
                <Dropdown.Header className="p-0 pb-2">
                  <span className="block text-xl">{t("panel.notif")}</span>
                </Dropdown.Header>
                <Dropdown.Item className=" bg-gray-100 dark:bg-dark2 p-3 text-center rounded-xl mt-3 cursor-default">
                  {t("panel.notifTxt")}
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-5 md:mt-14 mt-6 justify-center lg:justify-start">
            <div className="bg-[#FBBF24] text-white flex items-center p-3 sm:w-[250px] w-full  rounded-xl gap-4 ">
              <MdOutlinePayment className="bg-[#FCCC50] size-16 rounded-xl p-3" />
              <div className="flex flex-col gap-1">
                <p className="text-xs">{t("panel.pays")}</p>
                <p className="text-lg font-yekanN">{t("panel.paysTxt")}</p>
              </div>
            </div>
            <div className="bg-[#0EA5E9] text-white flex items-center p-3 sm:w-[250px] w-full  rounded-xl gap-4 ">
              <BsRocketTakeoff className="bg-[#3EB7ED] size-16 rounded-xl p-3" />
              <div className="flex flex-col gap-1">
                <p className="text-xs">{t("panel.courses")}</p>
                <p className="text-lg font-yekanN">{t("panel.courseTxt")}</p>
              </div>
            </div>
            <div className="bg-[#EC4899] text-white flex items-center p-3 sm:w-[250px] w-full  rounded-xl gap-4 ">
              <HiOutlineTicket className="bg-[#F06DAD] size-16 rounded-xl p-3" />
              <div className="flex flex-col gap-1">
                <p className="text-xs">{t("panel.allTickets")}</p>
                <p className="text-lg font-yekanN">{t("panel.ticket")}</p>
              </div>
            </div>
            <div className="bg-[#2ED573] text-white flex items-center p-3 sm:w-[250px] w-full  rounded-xl gap-4 ">
              <LuCircleDollarSign className="bg-[#58DD8F] size-16 rounded-xl p-3" />
              <div className="flex flex-col gap-1">
                <p className="text-xs">{t("panel.balance")}</p>
                <p className="text-lg font-yekanN">{t("panel.balanceTxt")}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full justify-between gap-5 mt-10">
            <div className="sm:w-[50%] w-full bg-white dark:bg-dark1 dark:text-slate-100 rounded-xl p-5">
              <p className="pb-5 text-xl">{t("panel.recentT")}</p>
              <hr />
              <p className="pt-5 text-center font-yekanL text-md">
                {t("panel.recentTT")}
              </p>
            </div>
            <div className="sm:w-[50%] w-full bg-white dark:bg-dark1 dark:text-slate-100 rounded-xl p-5">
              <p className="pb-5 text-xl">{t("panel.recentQ")}</p>
              <hr />
              <p className="pt-5 text-center font-yekanL text-md">
                {t("panel.recentQT")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PanelPage;
