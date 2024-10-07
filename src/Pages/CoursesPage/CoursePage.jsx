import { Breadcrumb, Button, Flowbite, Progress } from "flowbite-react";
import "./CoursePage.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import toman from "../../assets/images/coursePage/svgexport-36.svg";
import { BsFileEarmarkTextFill, BsInfoCircle } from "react-icons/bs";
import { FaBook, FaStar, FaUser, FaUsers } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdSupportAgent } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import Footer from "../../Components/Footer/Footer";

const CoursePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { id } = useParams();
  const { allCourses } = useSelector((store) => store.courses);
  const course = allCourses.find((course) => course.id == id);
  console.log(course);

  return (
    <>
      <div className="py-10 bg-[#F3F4F6] w-full">
        <div className="breadCrumb bg-white container mx-auto h-12 rounded-xl items-center flex px-5">
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item>
              <Link to="/Redux-App/">
                <IoMdHome size={20} style={{ transform: "rotate(0deg)" }} />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/Redux-App/courses">دوره ها</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {course.category == "frontend" ? "فرانت اند" : "پایتون"}
            </Breadcrumb.Item>
            <Breadcrumb.Item>{course.courseName}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <section className="bg-[#F3F4F6] pb-10">
        <div className="flex container justify-between gap-10">
          <div className="w-[50%] flex flex-col justify-between">
            <div>
              <h1 className="font-yekanB text-[28px]">{course.courseName}</h1>
              <p className="font-yekanM mt-5 leading-loose text-[17px]">
                {course.description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <Button color="success" pill>
                افزودن به سبد خرید
              </Button>
              <p className="flex items-center font-yekanN text-[28px] font-bold gap-1">
                {course.price.toLocaleString()}{" "}
                <img src={toman} alt="" className="object-contain w-8" />{" "}
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={course.image} className="rounded-xl" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] pb-10">
        <div className="flex container justify-between gap-3">
          <div className="w-8/12 flex flex-wrap gap-6">
            <div className="flex items-center gap-3 rounded-xl bg-white py-4 pr-5 w-[31%]">
              <BsInfoCircle size={37} />
              <div className="flex flex-col gap-2">
                <p className="font-yekanB">وضعیت دوره </p>
                <p className="font-yekanL text-sm">{course.courseStatus}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white  py-4 pr-5 w-[31%]">
              <IoTimeOutline size={37} />
              <div className="flex flex-col gap-2">
                <p className="font-yekanB">مدت زمان دوره </p>
                <p className="font-yekanL text-sm">
                  {course.courseTime + " ساعت"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white  py-4 pr-5 w-[31%]">
              <SlCalender size={37} />
              <div className="flex flex-col gap-2">
                <p className="font-yekanB">آخرین بروزرسانی </p>
                <p className="font-yekanL text-sm">1403/08/20</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white  py-4 pr-5 w-[31%]">
              <MdSupportAgent size={37} />
              <div className="flex flex-col gap-2">
                <p className="font-yekanB">روش پشتیبانی </p>
                <p className="font-yekanL text-sm">آنلاین</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white  py-4 pr-5 w-[31%]">
              <FaBook size={37} />
              <div className="flex flex-col gap-2">
                <p className="font-yekanB">پیش نیاز </p>
                <p className="font-yekanL text-sm">{course.prerequisite}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white  py-4 pr-5 w-[31%]">
              <GoDeviceCameraVideo size={37} />
              <div className="flex flex-col gap-2">
                <p className="font-yekanB">نوع مشاهده </p>
                <p className="font-yekanL text-sm">اسپات پلیر</p>
              </div>
            </div>
          </div>
          <div className="w-4/12 bg-white flex flex-col justify-between rounded-xl p-5">
            <div className="flex gap-4">
              <div className="bg-[#F3F4F6] flex items-center w-[50%] rounded-xl px-4 py-3 gap-3">
                <FaUsers size={37} />
                <div>
                  <p>{course.studentCount}</p>
                  <p>دانشجو</p>
                </div>
              </div>
              <div className="bg-[#F3F4F6] flex items-center w-[50%] rounded-xl px-4 py-3 gap-3">
                <FaStar size={37} />
                <div>
                  <p>{course.score == 5.0 ? "5.0" : course.score}</p>
                  <p>رضایت</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between ">
                <p className="">درصد تکمیل دوره</p>
                <p>{course.ProgressPercentage + "%"}</p>
              </div>
              <Progress progress={course.ProgressPercentage} className="mt-3" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] pb-10">
        <div className="container flex gap-7">
          <div className="w-8/12 rounded-xl bg-white p-5">
            <h2 className="flex gap-2 font-yekanEB text-[27px] text-slate-800">
              <BsFileEarmarkTextFill color="#FBBF24" size={40} />
              توضیحات
            </h2>
            <img src={course.image} className="my-8 w-full rounded-xl" alt="" />

            <p className="text-justify leading-loose relative">
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
                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white from-0% via-white/[55%] via-70% to-white/0 to-100% h-44"></div>
              )}
            </p>

            {isExpanded && (
              <p className="text-justify leading-loose">
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
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
          <div className="w-4/12  ">
            <div className="flex flex-col items-center rounded-xl py-10 bg-white">
              <span className="rounded-full size-20 bg-[#F3F4F6] flex items-center justify-center">
                <FaUser size={40} />
              </span>
              <p className="mt-5 font-yekanEB">
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
