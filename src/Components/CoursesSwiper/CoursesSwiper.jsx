import { Button } from "flowbite-react";
import pic from "../../assets/images/homePage/kolahKetab.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardCourse from "./CardCourse";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../Redux/slices/courses";
import { Navigation } from "swiper/modules";
const CoursesSwiper = () => {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((store) => store.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  return (
    <>
      <section className="bg-[#F4F5F7] dark:bg-dark3 lg:py-20 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:w-[88%] w-full mx-auto">
          <div className="flex flex-col lg:items-start items-center gap-4 lg:w-[25%] w-full">
            <img src={pic} className="size-32" />
            <h2 className="text-[30px] text-rang1 dark:text-slate-100 font-pinarEB">
              دوره های برتر آکادمی
            </h2>
            <p className="text-[15px] dark:text-slate-200">تدریس حرفه ای و یادگیری آسان</p>
            <Button gradientDuoTone="greenToBlue">همه دوره ها</Button>
          </div>

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            className="mySwiper lg:w-[88%] w-[95%] lg:h-[480px]  mt-7 lg:mt-0"
            modules={[Navigation]}
            navigation={true}
          >
            {allCourses?.slice(7, 12).map((course) => (
              <SwiperSlide className="lg:!w-[332px] md:!w-[300px] md:mx-3 " key={course.id}>
                <CardCourse
                  data={course}
                  bgColor="bg-#F4F5F7"
                  lineClamp="line-clamp-1"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CoursesSwiper;
