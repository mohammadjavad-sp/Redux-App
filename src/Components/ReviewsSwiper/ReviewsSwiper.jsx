import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./ReviewsSwiper.module.css";
import reviewPic1 from "../../assets/images/homePage/mem5.webp";
import reviewPic2 from "../../assets/images/homePage/mem6.jpg";
import reviewPic3 from "../../assets/images/homePage/story-3.jpg";
import { FaStar } from "react-icons/fa";
const ReviewsSwiper = () => {
  const reviews = [
    {
      id: 1,
      name: "مهدی جان نثاری",
      pic: reviewPic1,
    },
    {
      id: 2,
      name: "پریا ولی",
      pic: reviewPic2,
    },
    {
      id: 3,
      name: "آیدا محمدی",
      pic: reviewPic3,
    },
  ];
  return (
    <>
      <div className="w-full bg-[#F4F5F7] pb-20 text-center">
        <h2 className="text-[24px] text-[#2DA706] font-yekanEB">دانشجویان ما چه می گویند</h2>
        <p className="text-[14px] text-slate-500 mb-10">صدای شما را می شنویم و تا آخرین قدم کنارتان هستیم</p>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className={`my-swiper ${styles.swiper}`}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className={` ${styles.bote} ${styles.swiperSlide} border-[1px] border-slate-200 relative shadow-xl`}
            >
              <div className="absolute top-0 left-0 bg-[#5FBB0B] rounded-tl-xl rounded-br-xl rounded-sm text-sm px-3 py-2 text-white">
                {review.name}
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-5">
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
                <p className="text-[16px] text-slate-700 font-yekanL">
                  تا قبل از آشنایی با خدمات طراحی اپلیکیشن شما تجربه ناموفقی را
                  با دو شرکت مختلف تجربه کردم که منجر به شکست شد. اما بعد از
                  تحویل اپلیکیشن ساخته شده توسط شما کسب و کارم متحول شد.
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
