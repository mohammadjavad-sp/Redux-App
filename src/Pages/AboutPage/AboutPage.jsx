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
import logo from "../../assets/images/about/logoipsum-297.svg";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const AboutPage = () => {
  return (
    <>
      <header className="flex w-full mx-auto items-center bg-[#1C1732] px-24 pt-24 gap-14">
        <div className="w-7/12">
          <h1 className="text-white text-[39px] font-pinarEB mb-5">
            <span className="text-[#6AC847]">آموزش آنلاین حرفه ای</span> را به
            ما بسپارید
          </h1>
          <p className="text-white text-[17px] leading-loose mb-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، طراحان
            خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
          <div className="flex gap-5">
            <Button size="xl" className="bg-[#5BC91E]">
              درخواست مشاوره
            </Button>
            <Button size="xl" className="bg-[#FFFF00] text-black ">
              مشاهده دوره ها
            </Button>
          </div>
        </div>
        <div className="w-5/12">
          <img src={pic} alt="" />
        </div>
      </header>
      <div className="bg-[#1C1732]">
        <h2 className="text-white text-center text-[25px]">
          چرا آموزش آنلاین را باما شروع کنید؟
        </h2>
        <p className="text-[#FF9600] text-[25px] mt-3 text-center">
          اینجاییم که بهترین تجربه آموزش را لمس کنید
        </p>
        <div className="flex w-[88%] mx-auto gap-10 py-10">
          <div className="bg-[#2C2740] p-5 rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              ضمانت بهترین قیمت
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تضمین می‌کنیم که پایین‌ترین تعرفه را نسبت به نوع سرویس‌هایمان
              برای شما ارائه می‌کنیم.
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              ضمانت بهترین امکانات​
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تلاش کردیم و خواهیم کرد تا متنوع‌ترین و کامل‌ترین امکانات را به
              کاربران خود ارائه دهیم.
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              ضمانت بهترین کیفیت​
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تلاش کردیم و خواهیم کرد تا متنوع‌ترین و کامل‌ترین امکانات را به
              کاربران خود ارائه دهیم.
            </p>
          </div>
          <div className="bg-[#2C2740] p-5 rounded-xl border-[1px] border-[#555163]">
            <h3 className="text-[#FF00FF] text-[20px] mb-4">
              ضمانت بهترین پشتیبانی​
            </h3>
            <p className="text-white text-[14px] leading-loose">
              ما تلاش کردیم و خواهیم کرد تا متنوع‌ترین و کامل‌ترین امکانات را به
              کاربران خود ارائه دهیم.
            </p>
          </div>
        </div>
        <div className="flex w-[88%] mx-auto justify-between py-20">
          <div className="text-[28px] text-center">
            <p className="text-white">با همراهان ما آشنا شوید.</p>
            <p className="text-[#FF9600]">ما در حال بزرگ شدن هستیم!</p>
          </div>
          <div className="flex flex-1 items-center justify-end gap-10">
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

      <section className="flex flex-col items-center my-36 w-[88%] mx-auto">
        <div className="relative">
          <img src={shape2} className="w-[300px]" />
          <h2 className="absolute top-4 right-12 text-[23px]">
            چشم انداز آکادمی ما
          </h2>
        </div>
        <p className="text-[20px] text-center my-8 text-rang1">
          با توجه به سرعت پیشرفت تکنولوژی و تحول صنعت آموزش دیجیتال ما تلاش
          می‌کنیم در زمینه تدریس آنلاین سرویس‌هایی شایسته کاربران عزیزمان ارائه
          کنیم تا حس مهم بودن و ارزشمند بودن را لمس کنند.
        </p>
        <img src={cheshm} alt="" />
      </section>

      <footer className="w-full bg-[#1C1732]">
        <img src={footerShape} />
        <div className="flex flex-col items-center py-20 gap-7">
          <img src={logo} className="w-44" />
          <p className="text-white">ما را در شبکه های اجتماعی دنبال کنید</p>
          <div className="flex text-white gap-5">
            <FaInstagram size={30} />
            <FaTelegram size={30} />
            <FaWhatsapp size={30} />
            <FaXTwitter size={30} />
            <FaYoutube size={30} />
            <FaLinkedin size={30} />
          </div>
          <p className="text-blue-500">© SP 2024</p>
          <p className="text-white">
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
