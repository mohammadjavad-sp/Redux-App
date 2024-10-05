import { Button } from "flowbite-react";
import pic from "../../assets/images/homePage/kolahKetab.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardCourse from "./CardCourse";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../Redux/slices/courses";
const CoursesSwiper = () => {
  const dispatch = useDispatch();
  const {allCourses} = useSelector((store) => store.courses);
  
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  return (
    <>
      <section className="flex items-center w-[88%] mx-auto my-20">
        <div className="flex flex-col items-start gap-4 w-[25%]">
          <img src={pic} className="size-32" />
          <h2 className="text-[30px] text-rang1 font-pinarEB">
            دوره های برتر آکادمی
          </h2>
          <p className="text-[15px]">تدریس حرفه ای و یادگیری آسان</p>
          <Button gradientDuoTone="greenToBlue">همه دوره ها</Button>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          className="mySwiper w-[75%] h-[480px]"
        >
          {allCourses?.slice(7,12).map((course) => (
            <SwiperSlide className="!w-[332px]" key={course.id}>
              <CardCourse data={course} bgColor="bg-#F4F5F7" lineClamp="line-clamp-1" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default CoursesSwiper;
