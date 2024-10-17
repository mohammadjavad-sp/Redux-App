import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import { Button, Radio, ToggleSwitch } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { openFilterModal } from "../../Redux/slices/filter";

const FilterMobile = () => {
  const [switch1, setSwitch1] = useState(false);
  const { filterModal } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  /* useEffect(() => {
    if (filterModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }); */

  return (
    <>
      {filterModal && (
        <div className="fixed w-full h-full pb-10 bg-white dark:bg-dark3 flex flex-col z-[1000] ring-0 left-0 bottom-0" data-aos="fade-up">
          <div className="flex bg-[#F3F4F6] dark:bg-dark1 w-full justify-between p-5">
            <div className="flex items-center gap-1 dark:text-slate-100">
              <IoIosCloseCircleOutline
                size={30}
                onClick={() => dispatch(openFilterModal())}
              />
              <p className="font-yekanEB">فیلترها</p>
            </div>
            <div className="flex items-center gap-1 text-red-600">
              <p>حذف فیلترها</p>
              <GoTrash size={22} />
            </div>
          </div>

          <div className="divide-y-2 px-5 flex-1 dark:text-slate-100">
            <div className="flex justify-between py-5">
              <p>در حال پیش فروش</p>
              <ToggleSwitch checked={switch1} onChange={setSwitch1} />
            </div>
            <div className="py-5 flex flex-col gap-4 ">
              <div className="flex justify-between">
                <p>دوره های فرانت اند</p>
                <Radio name="courses" className="size-5" value="frontend" />
              </div>
              <div className="flex justify-between ">
                <p>دوره های بک اند</p>
                <Radio name="courses" className="size-5" value="frontend" />
              </div>
            </div>
          </div>

          <Button color="success" className="w-[90%] mx-auto py-2" pill>
            اعمال فیلتر
          </Button>
        </div>
      )}
    </>
  );
};

export default FilterMobile;
