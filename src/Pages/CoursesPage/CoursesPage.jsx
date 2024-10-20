import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  fetchCoursesByCategory,
  fetchCoursesBySearch,
  fetchCoursesBySort,
  fetchPreSaleCourses,
} from "../../Redux/slices/courses";
import { FaSquare } from "react-icons/fa6";
import { BiSort } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "./CoursesPage.module.css";
import { Button, Radio } from "flowbite-react";
import { PiCaretDownBold } from "react-icons/pi";
import Footer from "../../Components/Footer/Footer";
import CardCourse2 from "../../Components/CardCourse2/CardCourse2";
import { CiFilter } from "react-icons/ci";
import FilterMobile from "../../Components/Filters/FilterMobile";
import { openFilterModal, openSortModal } from "../../Redux/slices/filter";
import SortMobile from "../../Components/Filters/SortMobile";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";


const CoursesPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [pagination, setPagination] = useState(9);
  const [sort, setSort] = useState("همه دوره ها");

  const {t} = useTranslation()

  const options = ["همه دوره ها", "ارزان ترین", "گران ترین"];

  const dispatch = useDispatch();
  const { allCourses } = useSelector((store) => store.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  useEffect(() => {
    if (isChecked) {
      dispatch(fetchPreSaleCourses());
    } else {
      dispatch(fetchCourses());
    }
  }, [isChecked]);

  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{ className: "!bg-slate-200" }}
      />
      <section className="bg-[#F4F5F7] dark:bg-dark3 lg:py-7 pt-3">
        <div className="container w-[88%] flex-col gap-2 sm:flex-row flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FaSquare color="#FBBF24" size={30} className="hidden sm:block" />
            <h1 className="lg:text-[30px] text-[25px] font-yekanEB dark:text-slate-200 text-rang1">
              {t("myCourses")}
            </h1>
          </div>
          <div className="font-yekanN text-sm md:text-lg lg:text-xl text-slate-500 dark:text-slate-200">
            {allCourses.length} عنوان آموزشی
          </div>
        </div>
        <section className="container w-[88%] lg:mt-10 mt-5 flex flex-col lg:flex-row md:gap-8">
          <div className="lg:w-[25%] w-full h-full">
            <div className="flex items-center bg-white dark:bg-dark1 rounded-xl justify-between md:p-3 p-2">
              <input
                type="text"
                onChange={(e) => dispatch(fetchCoursesBySearch(e.target.value))}
                placeholder="جستجو بین دوره ها"
                className="border-0 rounded-xl focus:ring-0 dark:bg-dark1 dark:text-white"
              />
              <HiMagnifyingGlass size={30} color="#64748B" />
            </div>

            <div className="filterMobile flex md:hidden mt-5 gap-5">
              <div
                className="flex items-center gap-1 w-[50%] justify-center bg-white py-3 dark:bg-dark1 dark:text-slate-100 rounded-full"
                onClick={() => dispatch(openFilterModal())}
              >
                <CiFilter size={25} />
                <p>فیلتر</p>
              </div>
              <div
                className="flex items-center gap-1 w-[50%] justify-center bg-white py-3 rounded-full dark:bg-dark1 dark:text-slate-100"
                onClick={() => dispatch(openSortModal())}
              >
                <BiSort size={25} />
                <p>همه دوره ها</p>
              </div>
            </div>

            <div className="md:flex items-center hidden bg-white dark:bg-dark1 dark:text-white rounded-xl justify-between p-4 mt-6">
              <p>در حال پیش فروش</p>
              <div className={styles.checkboxWrapper}>
                <input
                  id="_checkbox-26"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor="_checkbox-26">
                  <div className={`${styles.tickMark}`}></div>
                </label>
              </div>
            </div>
            <div className=" bg-white dark:bg-dark1 dark:text-white hidden md:block rounded-xl justify-between p-4 mt-6">
              <div className="flex items-center justify-between mb-3">
                <p>همه دوره ها</p>
                <Radio
                  name="category"
                  value="همه دوره ها"
                  onChange={(e) =>
                    dispatch(fetchCoursesByCategory(e.target.value))
                  }
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <p>دوره های فرانت اند</p>
                <Radio
                  name="category"
                  value="فرانت اند"
                  onChange={(e) =>
                    dispatch(fetchCoursesByCategory(e.target.value))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <p>دوره های پایتون</p>
                <Radio
                  name="category"
                  value="پایتون"
                  onChange={(e) =>
                    dispatch(fetchCoursesByCategory(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[75%]  h-full flex flex-col">
            <div className="bg-white dark:bg-dark1 dark:text-white container hidden md:flex w-full rounded-xl items-center px-5">
              <p className="flex items-center font-yekanB gap-2">
                <BiSort size={25} />
                مرتب سازی بر اساس :
              </p>
              <div className="flex items-center gap-8 text-sm font-yekanM mr-5">
                {options.map((option) => (
                  <p
                    className={`${
                      sort == option && styles.activeSort
                    } py-4 cursor-pointer`}
                    onClick={() => {
                      setSort(option)
                      dispatch(fetchCoursesBySort(option))
                    }}
                    key={option}
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full flex flex-wrap justify-between gap-4 md:mt-7 mt-5">
              {allCourses?.slice(0, pagination).map((course) => (
                <CardCourse2
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
                onClick={() => setPagination(pagination + 9)}
                className="w-fit flex items-center my-10 mx-auto"
              >
                <span> مشاهده بیشتر</span>
                <PiCaretDownBold size={15} className="translate-y-[2px] mr-1" />
              </Button>
            )}
          </div>
        </section>
      </section>

      <FilterMobile />
      <SortMobile />

      <Footer />
    </>
  );
};

export default CoursesPage;
