import { Breadcrumb, Button, Flowbite, Progress } from "flowbite-react";
import "./CoursePage.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import toman from "../../assets/images/coursePage/svgexport-36.svg";
import tomanWhite from "../../assets/images/coursePage/whiteToman.svg";
import { BsFileEarmarkTextFill, BsInfoCircle } from "react-icons/bs";
import { FaBook, FaStar, FaUser, FaUsers } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdSupportAgent } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { useEffect, useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import sp from "../../assets/images/coursePage/sp.jpg";
import rj from "../../assets/images/coursePage/rj.jpg";
import eli from "../../assets/images/coursePage/eli.jpg";
import ali from "../../assets/images/coursePage/ali.jpg";
import Footer from "../../Components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../../Redux/slices/cart";

const CoursePage = () => {
  const dispatch = useDispatch();
  const { addedCourses } = useSelector((store) => store.cart);

  const { darkMode } = useSelector((store) => store.globals);
  const [isExpanded, setIsExpanded] = useState(false);
  const [teacherAx, setTeacherAx] = useState(null);

  const { id } = useParams();
  const { allCourses } = useSelector((store) => store.courses);
  const course = allCourses.find((course) => course.id == id);

  useEffect(() => {
    if (course.teacher == "محمدعلی آقازاده") {
      setTeacherAx(ali);
    } else if (course.teacher == "محمدجواد صدیق پور") {
      setTeacherAx(sp);
    } else if (course.teacher == "محمدرضا رجایی") {
      setTeacherAx(rj);
    } else {
      setTeacherAx(eli);
    }
  });

  

  const addCourseToCart = () => {
    if (isCourseExistInCart()) {
      toast.error("دوره قبلا به سبد خرید اضافه شده !!");
    } else {
      dispatch(addToCart(course));
      toast.success("دوره با موفقیت به سبد خرید اضافه شد :))");
    }
  };

  const isCourseExistInCart = () => {
    return addedCourses.some((item) => item.id == course.id);
  };

  return (
    <>
    <Toaster
        position="top-left"
        toastOptions={{ className: "!bg-slate-200" }}
      />
      <div className="lg:py-10 py-5 bg-[#F3F4F6] dark:bg-dark1 w-full px-5">
        <div className="breadCrumb bg-white dark:bg-dark2 container h-12 rounded-xl items-center flex px-5 overflow-x-auto text-nowrap">
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item>
              <Link to="/">
                <IoMdHome size={20} style={{ transform: "rotate(0deg)" }} />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/courses">دوره ها</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {course.category == "frontend" ? "فرانت اند" : "پایتون"}
            </Breadcrumb.Item>
            <Breadcrumb.Item>{course.courseName}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <section className="bg-[#F3F4F6] dark:bg-dark1 pb-10 px-5">
        <div className="flex flex-col bg-white dark:bg-dark2 lg:dark:bg-transparent lg:bg-transparent p-3 lg:p-0 rounded-xl lg:flex-row container justify-between lg:gap-10 gap-5">
          <div className="lg:w-[50%] order-2 lg:order-1 w-full flex flex-col justify-between">
            <div>
              <h1 className="font-yekanB lg:text-[28px] dark:text-slate-100 text-[20px]">
                {course.courseName}
              </h1>
              <p className="font-yekanM lg:my-2 my-5 leading-loose text-justify xl:text-[17px] md:text-[15px] text-[12px] md:line-clamp-3 line-clamp-2 dark:text-slate-300">
                {course.description}
              </p>
            </div>
            <div className="flex lg:justify-between justify-center gap-5 items-center">
              <Button color="success" pill onClick={addCourseToCart}>
                افزودن به سبد خرید
              </Button>
              <p className="flex items-center font-yekanN md:text-[28px] text-[18px] font-bold gap-1 dark:text-slate-100">
                {course.price.toLocaleString()}{" "}
                <img
                  src={darkMode ? tomanWhite : toman}
                  alt=""
                  className="object-contain md:w-8 w-5"
                />{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-[50%] order-1 lg:order-2">
            <img src={course.image} className="rounded-xl" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] dark:bg-dark1 pb-10 px-5">
        <div className="flex container flex-col lg:flex-row justify-between gap-7">
          <div className="lg:w-8/12 w-full flex flex-wrap gap-6 justify-between">
            <div className="flex flex-col md:flex-row items-center gap-3 rounded-xl bg-white dark:bg-dark2  py-4 md:pr-5 xl:w-[31%] sm:w-[30%] w-[46%]">
              <BsInfoCircle color="#046C4E" size={37} />
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="font-yekanB dark:text-slate-100">وضعیت دوره </p>
                <p className="font-yekanL dark:text-slate-200 text-sm">{course.courseStatus}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 rounded-xl bg-white dark:bg-dark2  py-4 md:pr-5 xl:w-[31%] sm:w-[30%] w-[46%]">
              <IoTimeOutline color="#046C4E" size={37} />
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="font-yekanB dark:text-slate-100">مدت زمان دوره </p>
                <p className="font-yekanL dark:text-slate-200 text-sm">
                  {course.courseTime + " ساعت"}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 rounded-xl bg-white dark:bg-dark2  py-4 md:pr-5 xl:w-[31%] sm:w-[30%] w-[46%]">
              <SlCalender color="#046C4E" size={37} />
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="font-yekanB dark:text-slate-100">آخرین بروزرسانی </p>
                <p className="font-yekanL dark:text-slate-200 text-sm">1403/08/20</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 rounded-xl bg-white dark:bg-dark2  py-4 md:pr-5 xl:w-[31%] sm:w-[30%] w-[46%]">
              <MdSupportAgent color="#046C4E" size={37} />
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="font-yekanB dark:text-slate-100">روش پشتیبانی </p>
                <p className="font-yekanL dark:text-slate-200 text-sm">آنلاین</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 rounded-xl bg-white dark:bg-dark2  py-4 md:pr-5 xl:w-[31%] sm:w-[30%] w-[46%]">
              <FaBook color="#046C4E" size={37} />
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="font-yekanB dark:text-slate-100">پیش نیاز </p>
                <p className="font-yekanL dark:text-slate-200 text-sm">{course.prerequisite}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 rounded-xl bg-white dark:bg-dark2  py-4 md:pr-5 xl:w-[31%] sm:w-[30%] w-[46%]">
              <GoDeviceCameraVideo color="#046C4E" size={37} />
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="font-yekanB dark:text-slate-100">نوع مشاهده </p>
                <p className="font-yekanL dark:text-slate-200 text-sm">اسپات پلیر</p>
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 w-full bg-white dark:bg-dark2 flex flex-col justify-between rounded-xl p-5">
            <div className="flex gap-4">
              <div className="bg-[#F3F4F6] dark:bg-dark1 flex items-center w-[50%] rounded-xl px-4 py-3 gap-3">
                <FaUsers color="#046C4E" size={37} />
                <div className="dark:text-slate-100">
                  <p>{course.studentCount}</p>
                  <p>دانشجو</p>
                </div>
              </div>
              <div className="bg-[#F3F4F6] dark:bg-dark1 flex items-center w-[50%] rounded-xl px-4 py-3 gap-3">
                <FaStar color="#F59E0B" size={37} />
                <div className="dark:text-slate-100">
                  <p>{course.score == 5.0 ? "5.0" : course.score}</p>
                  <p>رضایت</p>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex justify-between dark:text-slate-100">
                <p>درصد تکمیل دوره</p>
                <p>{course.ProgressPercentage + "%"}</p>
              </div>
              <Progress progress={course.ProgressPercentage} className="mt-3" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] dark:bg-dark1 pb-10 px-5">
        <div className="container flex flex-col lg:flex-row  gap-7">
          <div className="lg:w-8/12 w-full rounded-xl bg-white dark:bg-dark2 p-5 order-2 lg:order-1">
            <h2 className="flex gap-2 font-yekanEB md:text-[27px] text-[18px] items-center text-slate-800 dark:text-slate-100">
              <BsFileEarmarkTextFill color="#FBBF24" size={40} />
              توضیحات
            </h2>
            <img src={course.image} className="my-8 w-full rounded-xl" alt="" />

            <p className="text-justify leading-loose relative dark:text-slate-200">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است،{" "}
              {!isExpanded && (
                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white from-0% via-white/[55%] via-70% to-white/0 to-100% h-44 dark:from-dark2 dark:via-dark2/[55%] dark:to-dark2/0"></div>
              )}
            </p>

            {isExpanded && (
              <p className="text-justify leading-loose dark:text-slate-200">
                {" "}
                تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در
                این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی
                با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال و آینده
              </p>
            )}

            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="block mx-auto my-5"
              color="success"
            >
              {isExpanded ? "مشاهده کمتر مطلب" : "مشاهده بیشتر مطلب"}
              {isExpanded ? <RxCaretUp size={20} /> : <RxCaretDown size={20} />}
            </Button>
          </div>
          <div className="lg:w-4/12 w-full order-1 lg:order-2">
            <div className="flex flex-col items-center rounded-xl py-10 bg-white dark:bg-dark2">
              <span className="rounded-full size-20 bg-[#F3F4F6] flex items-center justify-center">
                <img src={teacherAx} className="rounded-full" />
              </span>
              <p className="mt-5 font-yekanEB dark:text-slate-100">
                {course.teacher} |{" "}
                <span className="font-yekanM">مدرس دوره</span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CoursePage;
