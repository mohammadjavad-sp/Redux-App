import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  closeSortModal,
  openSortModal,
  setSortName,
} from "../../Redux/slices/filter";
import { useDispatch, useSelector } from "react-redux";
import { SiTicktick } from "react-icons/si";
import "./SortMobile.css";
import { fetchCourses, fetchCoursesBySort } from "../../Redux/slices/courses";
import { useTranslation } from "react-i18next";

const SortMobile = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(t("sorts.allCourses"));
  const { sortModal } = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  const options = [
    t("sorts.allCourses"),
    t("sorts.cheapest"),
    t("sorts.expensivest"),
  ];

  useEffect(() => {
    if (sortModal) {
      document.body.style.overflow = "hidden";
    }
  });

  useEffect(() => {
    if (selected == t("sorts.cheapest")) {
      dispatch(fetchCoursesBySort(t("sorts.cheapest")));
      dispatch(setSortName(t("sorts.cheapest")));
      dispatch(closeSortModal());
    } else if (selected == t("sorts.expensivest")) {
      dispatch(fetchCoursesBySort(t("sorts.expensivest")));
      dispatch(setSortName(t("sorts.expensivest")));
      dispatch(closeSortModal());
    } else {
      dispatch(fetchCourses());
      dispatch(setSortName(t("sorts.allCourses")));
      dispatch(closeSortModal());
    }
  }, [selected]);

  return (
    <>
      {sortModal && (
        <div>
          <div
            className="fixed top-0 right-0 left-0 bg-black/40 w-full h-screen flex items-end z-[999]"
            onClick={() => dispatch(openSortModal())}
          ></div>
          <div
            data-aos="fade-up"
            className="absolute bottom-0 z-[1000] w-full h-fit bg-white rounded-t-2xl dark:bg-dark3"
          >
            <div className="bg-[#F3F4F6] dark:bg-dark1 dark:text-slate-100 p-5 flex justify-between rounded-t-2xl">
              <p className="font-yekanEB">مرتب سازی بر اساس</p>
              <IoIosCloseCircleOutline
                size={30}
                onClick={() => dispatch(openSortModal())}
              />
            </div>

            <div className="px-5 divide-y-2">
              <ul>
                {options.map((option) => (
                  <li
                    key={option}
                    className={`flex justify-between py-5 dark:text-slate-100 items-center pl-[5px] ${
                      selected == option ? "sortActive" : ""
                    }`}
                    onClick={() => setSelected(option)}
                  >
                    <p>{option}</p>
                    {selected == option && <SiTicktick size={20} />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SortMobile;
