import { useEffect, useRef, useState } from "react";
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
import i18next from "i18next";
import Lottie from "lottie-react";
import animation from "../../assets/images/animation/loading.json"; 

const CoursesPage = () => {
  const { t } = useTranslation();
  const categorysContainer = useRef();
  const dispatch = useDispatch();
  const { allCourses, loading } = useSelector((store) => store.courses);
  const { sortName } = useSelector((store) => store.filter);

  const [isChecked, setIsChecked] = useState(false);
  const [pagination, setPagination] = useState(9);
  const [sort, setSort] = useState(t("sorts.allCourses"));
  const [category1, setCategory1] = useState(t("filters.allCourses"));

  const options = [
    t("sorts.allCourses"),
    t("sorts.cheapest"),
    t("sorts.expensivest"),
  ];

  const categorys = [
    {
      id: 1,
      name: t("filters.allCourses"),
      value: t("filters.allCourses"),
      defaultChecked: true,
      checked: category1 === t("filters.allCourses"),
    },
    {
      id: 2,
      name: t("filters.frontend"),
      value: t("filters.frontend"),
      defaultChecked: false,
      checked: category1 === t("filters.frontend"),
    },
    {
      id: 3,
      name: t("filters.python"),
      value: t("filters.python"),
      defaultChecked: false,
      checked: category1 === t("filters.python"),
    },
  ];

  useEffect(() => {
    setSort(t("sorts.allCourses"));
  }, [t("sorts.allCourses")]);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  useEffect(() => {
    if (isChecked) {
      dispatch(fetchPreSaleCourses());
      setSort(options[0]);
      setCategory1(t("filters.allCourses"));
      categorysContainer.current.style.display = "none";
    } else {
      dispatch(fetchCourses());
      categorysContainer.current.style.display = "block";
    }
  }, [isChecked]);

  const handleSearch = (e) => {
    dispatch(fetchCoursesBySearch(e.target.value));
    setIsChecked(false);
    setSort(options[0]);
    setCategory1(t("filters.allCourses"));
  };

  const handleCategoryChange = (e) => {
    setIsChecked(false);
    setCategory1(e.target.value);
    setSort(options[0]);
    dispatch(fetchCoursesByCategory(e.target.value));
  };

  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{ className: "!bg-slate-200" }}
      />
      <section className="bg-[#F4F5F7] dark:bg-dark3 py-7 pt-3">
        <div
          className={`container w-[88%] flex-col gap-2 sm:flex-row flex justify-between items-center ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <div className="flex items-center gap-1">
            <FaSquare color="#FBBF24" size={30} className="hidden sm:block" />
            <h1 className="lg:text-[30px] text-[25px] font-yekanEB dark:text-slate-200 text-rang1">
              {t("myCourses")}
            </h1>
          </div>
          <div className="font-yekanN text-sm md:text-lg lg:text-xl text-slate-500 dark:text-slate-200">
            {allCourses.length} {t("titles")}
          </div>
        </div>
        <section
          className={`container w-[88%] lg:mt-10 mt-5 flex flex-col lg:flex-row md:gap-8 ${
            i18next.language == "en" && "ltr"
          }`}
        >
          <div className="lg:w-[25%] w-full h-full">
            <div
              className={`flex items-center bg-white dark:bg-dark1 rounded-xl justify-between md:p-3 p-2 `}
            >
              <input
                type="text"
                onChange={handleSearch}
                placeholder={t("filters.search")}
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
                <p>{sortName}</p>
              </div>
            </div>

            <div className="md:flex items-center hidden bg-white dark:bg-dark1 dark:text-white rounded-xl justify-between p-4 mt-6">
              <p>{t("filters.preSales")}</p>
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
            <div
              className=" bg-white dark:bg-dark1 dark:text-white hidden md:block rounded-xl justify-between p-4 mt-6 "
              ref={categorysContainer}
            >
              {categorys.map((category) => (
                <div
                  className="flex items-center justify-between mb-3"
                  key={category.id}
                >
                  <p>{category.name}</p>
                  <Radio
                    name="category"
                    value={category.value}
                    onChange={handleCategoryChange}
                    defaultChecked={category.defaultChecked}
                    checked={category.checked}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[75%]  h-full flex flex-col">
            <div className="bg-white dark:bg-dark1 dark:text-white container hidden md:flex w-full rounded-xl items-center px-5">
              <p className="flex items-center font-yekanB gap-2">
                <BiSort size={25} />
                {t("sorts.text")}
              </p>
              <div className="flex items-center gap-8 text-sm font-yekanM mx-5">
                {options.map((option) => (
                  <p
                    className={`${
                      sort == option && styles.activeSort
                    } py-4 cursor-pointer`}
                    onClick={() => {
                      setSort(option);
                      dispatch(fetchCoursesBySort(option));
                      setIsChecked(false);
                      setCategory1(t("filters.allCourses"));
                    }}
                    key={option}
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full flex flex-wrap justify-between gap-4 md:mt-7 mt-5">
              {loading ? (
                <div className="w-full flex items-center justify-center">
                  <Lottie animationData={animation} />
                </div>
              ) : (
                allCourses
                  ?.slice(0, pagination)
                  .map((course) => (
                    <CardCourse2
                      data={course}
                      key={course.id}
                      bgColor="bg-white"
                      text={course.description}
                    />
                  ))
              )}
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
