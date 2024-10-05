import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../Redux/slices/courses";
import { FaSquare } from "react-icons/fa6";
import { BiSort } from "react-icons/bi";
import CardCourse from "../../Components/CoursesSwiper/CardCourse";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "./CoursesPage.module.css";
import { Button } from "flowbite-react";
import { PiCaretDownBold } from "react-icons/pi";
import Footer from "../../Components/Footer/Footer";
const CoursesPage = () => {
  const [pagination, setPagination] = useState(9);
  const dispatch = useDispatch();
  const { allCourses } = useSelector((store) => store.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <>
      <div className="container flex justify-between mt-7 items-center">
        <div className="flex items-center gap-1">
          <FaSquare color="#FBBF24" size={30} />
          <h1 className="text-[30px] font-yekanEB text-rang1">دوره های ما</h1>
        </div>
        <div className="font-yekanN text-xl">
          {allCourses.length} عنوان آموزشی
        </div>
      </div>
      <section className="container w-full mt-10 flex gap-8">
        <div className="w-[25%] h-full">
          <div className="flex items-center bg-white rounded-xl justify-between p-3">
            <input
              type="text"
              placeholder="جستجو بین دوره ها"
              className="border-0 rounded-xl focus:ring-0"
            />
            <HiMagnifyingGlass size={30} color="#64748B" />
          </div>
          <div className="flex items-center bg-white rounded-xl justify-between p-4 mt-6">
            <p>در حال پیش فروش</p>
            <div class={styles.checkboxWrapper}>
              <input id="_checkbox-26" type="checkbox" />
              <label for="_checkbox-26">
                <div class={styles.tickMark}></div>
              </label>
            </div>
          </div>
          <div className=" bg-white rounded-xl justify-between p-4 mt-6">
            <div className="flex items-center justify-between mb-3">
              <p>دوره های فرانت اند</p>

              <label class={styles.container1}>
                <input type="checkbox" checked="false" />
                <div class={styles.checkmark}></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <p>دوره های پایتون</p>
              <label class={styles.container1}>
                <input type="checkbox" checked="false" />
                <div class={styles.checkmark}></div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-[75%]  h-full flex flex-col">
          <div className="bg-white w-full rounded-xl flex items-center px-5">
            <p className="flex items-center font-yekanB gap-2">
              <BiSort size={25} />
              مرتب سازی بر اساس :
            </p>
            <div className="flex items-center gap-8 text-sm font-yekanM mr-5">
              <p className="activeSort py-4 cursor-pointer focus:text-blue-500 ">
                همه دوره ها
              </p>
              <p className="cursor-pointer">ارزان ترین</p>
              <p className="cursor-pointer">گران ترین</p>
            </div>
          </div>
          <div className=" w-full flex flex-wrap justify-between gap-y-4 mt-7">
            {allCourses?.slice(0, pagination).map((course) => (
              <CardCourse
                data={course}
                key={course.id}
                bgColor="bg-white"
                text={course.description}
              />
            ))}
          </div>
          {pagination < allCourses.length && (
            <Button
              gradientDuoTone="greenToBlue"
              onClick={()=>setPagination(pagination + 9)}
              className="w-fit flex items-center my-10 mx-auto"
            >
              <span> مشاهده بیشتر</span>
              <PiCaretDownBold size={15} className="translate-y-[2px] mr-1" />
            </Button>
          )}
        </div>
      </section>



      <Footer/>
    </>
  );
};

export default CoursesPage;
