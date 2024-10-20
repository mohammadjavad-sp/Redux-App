import { FaAndroid, FaJs, FaPhp } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import DemoCourse from "./DemoCourse";
import { useTranslation } from "react-i18next";

const DemoCourses = () => {
  const { t } = useTranslation();

  const DemoCourses = [
    {
      id: 1,
      courseName: t("demoCourses.Business"),
      courseLogo: <IoBusiness size={30} />,
    },
    {
      id: 2,
      courseName: t("demoCourses.php"),
      courseLogo: <FaPhp size={30} />,
    },
    {
      id: 3,
      courseName: t("demoCourses.seo"),
      courseLogo: <TbSeo size={30} />,
    },
    {
      id: 4,
      courseName: t("demoCourses.android"),
      courseLogo: <FaAndroid size={30} />,
    },
    {
      id: 5,
      courseName: t("demoCourses.js"),
      courseLogo: <FaJs size={30} />,
    },
  ];
  return (
    <>
      <div className="bg-[#F4F5F7] dark:bg-dark3 py-10">
        <div className="flex lg:w-9/12 mx-auto lg:justify-between flex-wrap justify-center gap-7 lg:gap-0">
          {DemoCourses.map((item) => (
            <DemoCourse {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DemoCourses;
