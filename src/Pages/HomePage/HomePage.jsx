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
import styles from "./HomePage.module.css";
import { FaBrain, FaDatabase, FaFingerprint, FaReact } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import arrow from "../../assets/images/homePage/arrow.png";
import person from "../../assets/images/homePage/person-ok.webp";
import message from "../../assets/images/homePage/message-1.svg";
import Timer from "../../Components/Timer/Timer";
const HomePage = () => {
  return (
    <>
      <header className="bg-[#F4F5F7]">
        <div className="flex w-[88%] justify-between items-center mx-auto">
          <div className="w-[50%] flex flex-col gap-7">
            <div className="flex">
              <div className="bg-[#FF3D3D] w-max rounded-full flex relative items-center">
                <img
                  src={star}
                  className="size-[40px] absolute translate-x-1"
                />
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
        </div>
      </header>

      <DemoCourses />

      <CoursesSwiper />

      <ReviewsSwiper />

      <section className="bg-[#F4F5F7] text-center py-20">
        <p className="font-yekanEB text-[28px] text-[#2A2D53]">
          مسیر یادگیری برنامه نویسی
        </p>
        <p className="text-[#2A2D53] mt-3">نقشه راه ورود به دنیای کدنویسی</p>
        <div
          className={`${styles.roadMap} mx-auto mt-10 flex justify-between w-[88%]`}
        >
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] shadow-lg p-6">
              <FaFingerprint size={40} color="#555775" />
            </div>
            <p className="text-[#555775] mt-3">اصول فرانت اند</p>
          </div>
          <img src={arrow} className="rotate-90 w-5 object-contain" alt="" />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] shadow-lg p-6">
              <FaDatabase size={40} color="#555775" />
            </div>
            <p className="text-[#555775] mt-3">شروع بکند</p>
          </div>
          <img src={arrow} className="rotate-90 w-5 object-contain" alt="" />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] shadow-lg p-6">
              <MdOutlineSecurity size={40} color="#555775" />
            </div>
            <p className="text-[#555775] mt-3">هک و امنیت</p>
          </div>
          <img src={arrow} className="rotate-90 w-5 object-contain" alt="" />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] shadow-lg p-6">
              <FaReact size={40} color="#555775" />
            </div>
            <p className="text-[#555775] mt-3">فریم ورک ها</p>
          </div>
          <img src={arrow} className="rotate-90 w-5 object-contain" alt="" />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] shadow-lg p-6">
              <FaBrain size={40} color="#555775" />
            </div>
            <p className="text-[#555775] mt-3">ساخت نمونه کار</p>
          </div>
          <img src={arrow} className="rotate-90 w-5 object-contain" alt="" />
          <div className="flex flex-col items-center  ">
            <div className="rounded-[30px] shadow-lg p-6">
              <GrUserWorker size={40} color="#555775" />
            </div>
            <p className="text-[#555775] mt-3">استخدام موفق</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F4F5F7] py-20">
        <div className="w-[80%] flex justify-between mx-auto items-center ">
          <div>
            <img src={person} className="w-[450px]" alt="" />
          </div>
          <div className="flex items-center flex-col">
            <Timer/>
            <img src={message} className="w-32" alt="" />
            <p className="text-[29px] font-yekanEB mt-2 text-[#474B53]">
              منتظر اتفاق های خوب باشید ...
            </p>
            <p className="text-[20px] font-yekanL mt-5">
              ثبت نام کن تا زودتر از همه باخبر بشی!
            </p>

            <div
              className={` w-full mt-10 flex flex-col items-center justify-center`}
            >
              <div className="flex rounded-md bg-white shadow-xl p-2">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="bg-transparent border-0 text-black !ring-0"
                />
                <input
                  type="email"
                  placeholder="آدرس ایمیل"
                  className="bg-transparent border-0 text-black !ring-0"
                />
                <Button
                  color="failure"
                  className="w-[60px] h-[60px] rounded-md flex justify-center items-center"
                >
                  ارسال
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
