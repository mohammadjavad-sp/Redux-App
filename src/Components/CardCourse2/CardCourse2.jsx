import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowRoundBack, IoMdTime } from "react-icons/io";
import { FaMicrophoneAlt, FaStar, FaUser } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import styles from "./CardCourse2.module.css";
import toman from "../../assets/images/coursePage/svgexport-36.svg";
import whiteToman from "../../assets/images/coursePage/whiteToman.svg";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../Redux/slices/cart";
const customTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 !justify-between",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "scale-[0.95] rounded-xl",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

const CardCourse2 = ({ data, bgColor, lineClamp, text }) => {
  const { darkMode } = useSelector((store) => store.globals);
  const { addedCourses } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const addCourseToCart = () => {
    if (isCourseExistInCart()) {
      toast.error("دوره قبلا به سبد خرید اضافه شده !!");
    } else {
      dispatch(addToCart(data));
      toast.success("دوره با موفقیت به سبد خرید اضافه شد :))");
    }
  };

  const isCourseExistInCart = () => {
    return addedCourses.some((course) => course.id == data.id);
  };
  return (
    <>
      <Card
        theme={customTheme}
        className={`xl:w-[32%] md:w-[48%] w-auto relative ${bgColor} rounded-xl p-0 shadow-none border-[#E2E3E5] rtl`}
        imgSrc={data.image}
      >
        <div className="px-2 py-1 bg-white flex w-fit absolute top-5 rounded-lg font-yekanN text-xs text-[#D7AB0E] items-center gap-1">
          <FaStar color="#D7AB0E" className="translate-y-[-2px]" />
          {data.score}
        </div>
        <div className="px-2 py-1 bg-white flex w-fit absolute top-5 left-5 rounded-lg font-yekanN text-xs items-center gap-1">
          <PiStudent className="translate-y-[-2px]" />
          {data.studentCount}
        </div>
        <h5
          className={`text-md font-yekanEB tracking-tight text-rang1 dark:text-slate-100 hover:text-[#35AD12] cursor-pointer duration-300 flex-1 ${lineClamp}`}
        >
          <Link to={`/Redux-App/courses/${data.id}`}>{data.courseName}</Link>
        </h5>
        <p className="line-clamp-2 font-yekanM text-sm dark:text-slate-200">
          {text}
        </p>
        <div className="flex gap-10">
          <div className="flex items-center gap-1 font-yekanN text-sm dark:text-slate-200">
            <IoMdTime />
            {data.courseTime} ساعت
          </div>
          <div className="flex items-center gap-1 text-[#3ACA74] text-sm ">
            <FaMicrophoneAlt />
            {data.courseStatus}
          </div>
        </div>
        <p className="flex text-sm gap-1 dark:text-slate-200">
          <FaUser />
          {data.teacher}
        </p>
        <Link
          to={`/Redux-App/courses/${data.id}`}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-400 duration-200 text-sm font-yekanEB"
        >
          مشاهده اطلاعات دوره <IoIosArrowRoundBack size={25} />
        </Link>
        <div className="flex items-center justify-between">
          <button dir="ltr" className={`${styles.btnCart} shadow-xl`} onClick={addCourseToCart}>
            <div className={styles.svgWrapper1}>
              <div className={styles.svgWrapper}>
                <FaCartShopping />
              </div>
            </div>
            <span>خرید دوره</span>
          </button>
          <p className="font-bold font-yekanN flex gap-1 dark:text-slate-100">
            {data.price.toLocaleString()}{" "}
            <img
              src={darkMode ? whiteToman : toman}
              className="object-contain w-5"
            />
          </p>
        </div>
      </Card>
    </>
  );
};

export default CardCourse2;
