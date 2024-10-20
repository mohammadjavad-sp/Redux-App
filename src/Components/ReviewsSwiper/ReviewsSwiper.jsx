import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./ReviewsSwiper.module.css";
import reviewPic1 from "../../assets/images/homePage/mehdi.jpg";
import reviewPic2 from "../../assets/images/homePage/pariya.jpg";
import reviewPic3 from "../../assets/images/homePage/ava.jpg";
import { FaStar } from "react-icons/fa";
import i18next, { t } from "i18next";
const ReviewsSwiper = () => {
  const reviews = [
    {
      id: 1,
      name: t("reviewsName.mehdi"),
      pic: reviewPic1,
    },
    {
      id: 2,
      name: t("reviewsName.pariya"),
      pic: reviewPic2,
    },
    {
      id: 3,
      name: t("reviewsName.ava"),
      pic: reviewPic3,
    },
  ];
  return (
    <>
      <div className={`w-full bg-[#F4F5F7] dark:bg-dark3 text-center `}>
        <h2
          className={`text-[24px] text-[#2DA706] font-yekanEB ${
            i18next.language == "en" && "ltr"
          }`}
        >
          {t("studentsSays")}
        </h2>
        <p className="text-[14px] text-slate-500 dark:text-slate-400 mb-10">
          {t("textStudentsSays")}
        </p>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className={`my-swiper lg:w-[600px] md:w-[500px] sm:w-[400px] w-[250px] h-[260px]`}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className={` ${styles.bote} ${styles.swiperSlide} border-[1px] border-slate-200 dark:border-0 dark:bg-dark2 relative shadow-xl`}
            >
              <div className="absolute top-0 left-0 bg-[#5FBB0B] rounded-tl-xl rounded-br-xl rounded-sm text-sm px-3 py-2 text-white">
                {review.name}
              </div>
              <div className="flex flex-col items-center justify-center gap-3 sm:p-5">
                <div className="p-1 border-dashed border-[#A29E9E] border-2 rounded-full">
                  <img src={review.pic} className="size-16 rounded-full" />
                </div>
                <div className="flex text-[#FFA500]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="lg:text-[16px] md:text-[14px] text-[12px] px-5 text-justify text-slate-700 dark:text-slate-300 font-yekanL">
                  {t("decriptionStudentSays")}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ReviewsSwiper;
