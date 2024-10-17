import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { openSortModal } from "../../Redux/slices/filter";
import { useDispatch, useSelector } from "react-redux";
import { SiTicktick } from "react-icons/si";
import "./SortMobile.css";

const SortMobile = () => {
  const [selected, setSelected] = useState("همه دوره ها");
  const { sortModal } = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  const options = ["همه دوره ها", "ارزان ترین", "گران ترین"];

  useEffect(() => {
    if (sortModal) {
      document.body.style.overflow = "hidden";
    }
  });

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
