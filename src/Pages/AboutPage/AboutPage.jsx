import { Button } from "flowbite-react";
import pic from "../../assets/images/about/person-ok.webp";
import shape1 from "../../assets/images/about/Untitled-1.png";
import up from "../../assets/images/about/up.svg";
import post from "../../assets/images/about/post.svg";
import air from "../../assets/images/about/iran-air-icon-2.svg";
import khodro from "../../assets/images/about/iran-khodro-icon.svg";
import shape2 from "../../assets/images/about/svgexport-3.svg";
import cheshm from "../../assets/images/about/cheshm-andaz.png";
import footerShape from "../../assets/images/about/svgexport-4.png";
import footerShapeDark from "../../assets/images/about/svgexport-4(dark).png";
import logo from "../../assets/images/about/logoipsum-297.svg";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const { darkMode } = useSelector((store) => store.globals);
  return (
    <>
      <header className="flex w-full flex-col lg:flex-row mx-auto items-center bg-[#1C1732] lg:px-24 px-7 lg:pt-24 pt-10 gap-14">
        <div className="lg:w-7/12 order-2 lg:order-1">
          <h1 className="text-white lg:text-[35px] sm:text-[25px] text-[20px] font-pinarEB mb-5">
            <span className="text-[#6AC847]">آموزش آنلاین حرفه ای</span> را به
            ما بسپارید
          </h1>
          <p className="text-white text-justify lg:text-[16px] text-[14px] leading-loose mb-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، طراحان
            خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
          <div className="flex gap-5">
            <Button size="md" className="bg-[#5BC91E]">
              درخواست مشاوره
            </Button>
            <Button size="md" className="bg-[#FFFF00] text-black ">
              مشاهده دوره ها
            </Button>
          </div>
        </div>
        <div className="lg:w-5/12 order-1 lg:order-2">
          <img src={pic} className="" />
        </div>
      </header>
      <div className="bg-[#1C1732] pt-10 px-7">
        <h2 className="text-white text-center md:text-[25px] text-[20px]">
          چرا آموزش آنلاین را باما شروع کنید؟
        </h2>
        <p className="text-[#FF9600] md:text-[25px] text-[18px] mt-3 text-center">
          اینجاییم که بهترین تجربه آموزش را لمس کنید
        </p>
        <div className="flex flex-wrap justify-center items-stretch  mx-auto gap-10 py-10">
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              ضمانت بهترین قیمت
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تلاش کردیم و خواهیم کرد تا متنوع‌ترین و کامل‌ترین امکانات را به
              کاربران خود ارائه دهیم.
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              ضمانت بهترین امکانات​
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تلاش کردیم و خواهیم کرد تا متنوع‌ترین و کامل‌ترین امکانات را به
              کاربران خود ارائه دهیم.
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              ضمانت بهترین کیفیت​
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تلاش کردیم و خواهیم کرد تا متنوع‌ترین و کامل‌ترین امکانات را به
              کاربران خود ارائه دهیم.
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 lg:w-[20%] md:w-[45%] rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4 ">
              ضمانت بهترین خدمات
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تلاش کردیم و خواهیم کرد تا متنوع‌ترین و کامل‌ترین امکانات را به
              کاربران خود ارائه دهیم.
            </p>
          </div>
        </div>
        <div className="flex px-7 flex-col lg:flex-row gap-7 lg:gap-0 mx-auto justify-between py-20">
          <div className="md:text-[28px] text-[20px] text-center">
            <p className="text-white">با همراهان ما آشنا شوید.</p>
            <p className="text-[#FF9600]">ما در حال بزرگ شدن هستیم!</p>
          </div>
          <div className="flex flex-1 flex-wrap items-center lg:justify-end justify-center gap-10">
            <img src={up} alt="" />
            <img src={post} alt="" />
            <img src={air} alt="" />
            <img src={air} alt="" />
            <img src={khodro} alt="" />
            <img src={up} alt="" />
          </div>
        </div>
      </div>
      <img src={shape1} className="text-red-500" />

      <section className="flex flex-col items-center md:my-20 my-10 w-[88%] mx-auto">
        <div className="relative">
          <img src={shape2} className="w-[300px]" />
          <h2 className="absolute top-4 right-12 text-[23px] dark:text-slate-100">
            چشم انداز آکادمی ما
          </h2>
        </div>
        <p className="text-[20px] my-8 text-rang1 text-justify lg:text-center dark:text-slate-200">
          با توجه به سرعت پیشرفت تکنولوژی و تحول صنعت آموزش دیجیتال ما تلاش
          می‌کنیم در زمینه تدریس آنلاین سرویس‌هایی شایسته کاربران عزیزمان ارائه
          کنیم تا حس مهم بودن و ارزشمند بودن را لمس کنند.
        </p>
        <img src={cheshm} alt="" />
      </section>

      <footer className="w-full bg-[#1C1732]">
        <img src={darkMode ? footerShapeDark : footerShape} />
        <div className="flex flex-col items-center py-20 gap-7 px-7">
          <img src={logo} className="w-44" />
          <p className="text-white">ما را در شبکه های اجتماعی دنبال کنید</p>
          <div className="flex flex-wrap justify-center text-white gap-5">
            <FaInstagram size={30} />
            <FaTelegram size={30} />
            <FaWhatsapp size={30} />
            <FaXTwitter size={30} />
            <FaYoutube size={30} />
            <FaLinkedin size={30} />
          </div>
          <p className="text-blue-500">© SP 2024</p>
          <p className="text-white text-center leading-[30px]">
            تمامی حقوق مادی و معنوی سایت متعلق به{" "}
            <span className="text-blue-500">SP</span> می‌باشد و هر گونه
            کپی‌برداری پیگرد قانونی دارد.
          </p>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
