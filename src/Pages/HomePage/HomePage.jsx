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
import CardCourse from "../../Components/CoursesSwiper/CardCourse";
import CoursesSwiper from "../../Components/CoursesSwiper/CoursesSwiper";
import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <header className="flex w-[88%] justify-between items-center mx-auto">
        <div className="w-[50%] flex flex-col gap-7">
          <div className="flex">
            <div className="bg-[#FF3D3D] w-max rounded-full flex relative items-center">
              <img src={star} className="size-[40px] absolute translate-x-1" />
              <p className="pr-12 pl-3 py-1 text-white text-[14px]">
                بوت کمپ بعدی
              </p>
            </div>
            <p className="flex items-center dark:text-white text-[14px] mr-2 font-yekanB">
              زمستان <span className="font-yekanN">1403</span>
              <img src={emoji} className="size-4 mr-1" />
            </p>
          </div>
          <h1 className="text-[49px] font-pinarEB text-rang1 dark:text-slate-200">
            برنامه نویسی را سریع و آسان یاد بگیرید
          </h1>
          <p className="text-[17px] text-[#B5BAC2]">
            یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست تلاش و تمرین داشته
            باشید، بقیه‌اش با ما !
          </p>
          <div className="flex items-center justify-between w-[468px] h-[120px] bg-[#EBECEE] dark:bg-slate-600 rounded-xl p-5">
            <Button
              className="rounded-full"
              size="xl"
              gradientDuoTone="purpleToPink"
            >
              مشاهده دوره ها
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
              <div className="flex">
                <img src={member} alt="" />
                <p className="dark:text-white">
                  <span className="font-yekanN ">700</span>k+ دانشجو
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[50%]">
          <img src={plus} className="absolute z-10" />
          <img src={imgHeader} className="size-[600px]" />
          <img src={shape1} className="absolute left-0 bottom-16" />
          <img src={shape2} className="absolute left-0 bottom-24" />
        </div>
      </header>

      <DemoCourses />

      <CoursesSwiper />



      <Footer/>
    </>
  );
};

export default HomePage;
