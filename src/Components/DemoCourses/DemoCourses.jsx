import { FaAndroid, FaJs, FaPhp } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import DemoCourse from "./DemoCourse";

const DemoCourses = () => {
  const DemoCourses = [
    {
      id: 1,
      courseName: "کسب و کار",
      courseLogo: <IoBusiness size={30} />,
    },
    {
      id: 2,
      courseName: "برنامه نویسی php",
      courseLogo: <FaPhp size={30} />,
    },
    {
      id: 3,
      courseName: "سئوی تکنیکال",
      courseLogo: <TbSeo size={30} />,
    },
    {
      id: 4,
      courseName: "برنامه نویسی اندروید",
      courseLogo: <FaAndroid size={30} />,
    },
    {
      id: 5,
      courseName: "جاوااسکریپت",
      courseLogo: <FaJs size={30} />,
    },
  ];
  return (
    <>
      <div className="flex w-9/12 mx-auto justify-between mt-10">
        {DemoCourses.map((item) => (
          <DemoCourse {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default DemoCourses;
