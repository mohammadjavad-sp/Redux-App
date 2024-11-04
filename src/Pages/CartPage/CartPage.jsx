import { FiShoppingBag } from "react-icons/fi";
import toman from "../../assets/images/coursePage/svgexport-36.svg";
import greenToman from "../../assets/images/coursePage/greenToman.svg";
import whiteToman from "../../assets/images/coursePage/whiteToman.svg";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/slices/cart";
import { Alert } from "flowbite-react";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const [langDirection, setLangDirection] = useState("");
  const { addedToCart } = useSelector((store) => store.cart);
  const { addedCourses } = useSelector((store) => store.cart);
  const { total } = useSelector((store) => store.cart);
  const { darkMode } = useSelector((store) => store.globals);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    setLangDirection(i18n.language === "en" ? "ltr" : "rtl");
  }, [i18n.language]);

  return (
    <>
      {addedToCart == 0 ? (
        <Alert
          color="warning"
          className={`m-10 dark:bg-dark3 dark:text-slate-100 ${langDirection}`}
        >
          {t("emptyCart")}
        </Alert>
      ) : (
        <section className=" mx-auto py-14 px-12 h-auto bg-[#F3F4F6] dark:bg-dark3">
          <div className="container flex flex-col lg:flex-row gap-7">
            <div className="lg:w-8/12 w-full bg-white dark:bg-dark1 rounded-2xl">
              <div className="w-full bg-[#22C55E] rounded-t-2xl px-5 py-4 flex gap-3 items-center text-white">
                <FiShoppingBag size={30} />
                <p className="text-xl font-bold">سبد خرید</p>
              </div>

              <div className="divide-y-2 md:px-5 px-2">
                {addedCourses.map((course) => (
                  <div
                    className="flex flex-col md:flex-row items-center justify-between p-5 gap-[8%]"
                    key={course.id}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <img src={course.image} className="md:w-44 rounded-lg" />
                      <div className="">
                        <p className="md:text-[16px] text-base mb-3 font-yekanEB dark:text-slate-100">
                          {course.courseName}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                          {course.teacher}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-3 w-full md:w-auto justify-between items-center xl:gap-16 gap-14">
                      <p className="flex gap-1 text-[#22C55E] font-bold font-yekanN">
                        {course.price.toLocaleString()}{" "}
                        <img src={greenToman} className="object-contain w-5" />
                      </p>
                      <FaRegTrashAlt
                        className="text-slate-300 cursor-pointer hover:text-red-500"
                        onClick={() => dispatch(removeFromCart(course))}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-4/12 bg-white dark:bg-dark1 rounded-2xl h-fit">
              <div className="w-full bg-[#22C55E] rounded-t-2xl px-5 py-4 flex gap-3 items-center text-white">
                <MdOutlinePayment size={30} />
                <p className="text-xl font-bold">اطلاعات پرداخت</p>
              </div>
              <div className="flex p-5 justify-between dark:text-slate-100">
                <p className="text-lg">مجموع:</p>
                <p className="font-yekanN font-bold flex items-center gap-1 text-2xl">
                  {total.toLocaleString()}{" "}
                  <img src={darkMode ? whiteToman : toman} className="w-5" />
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartPage;
