import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../assets/images/logoipsum-332.svg";
import enamad from "../../assets/images/footer/enamad.png"
import samandehi from "../../assets/images/footer/samandehi.png"

const Footer = () => {
  return (
    <>
      <footer
        className="w-full pb-10 bg-white dark:bg-dark1 dark:!shadow-none"
        style={{ boxShadow: "1px 1px 5px gray" }}
      >
        <div className="w-[88%] mx-auto flex flex-col lg:flex-row gap-5 justify-between items-center py-10 border-b-2 border-b-[#BA08FA]">
          <div>
            <p className="text-[30px] dark:text-slate-300 font-yekanEB">
              تلفن:{" "}
              <span className="font-yekanN font-bold text-[#6363C1] dark:text-purple-500">
                7654321 021
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaInstagram size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaTelegram size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaWhatsapp size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaXTwitter size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 dark:bg-dark2 dark:text-slate-200 border-b-[2px] border-b-[#6363C1]">
              <FaLinkedinIn size={25} />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-[88%] mx-auto items-stretch lg:pt-6">
          <div className="lg:w-4/12 pt-10 flex flex-col justify-between w-full">
            <div>
            <img src={logo} className="w-20 mx-auto lg:mx-0 mb-5" />
            <p className="lg:pl-16 text-justify leading-[30px] dark:text-slate-200">
              برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. 
            </p>
            </div>
           
          </div>
          <div className="flex flex-row flex-wrap gap-10 lg:w-8/12 w-full py-16 sm:justify-between justify-evenly ">
            <div className="">
              <h3 className="font-yekanEB mb-5 dark:text-slate-100">دسترسی سریع</h3>
              <ul className="leading-[40px] dark:text-slate-200">
                <li>تماس با ما</li>
                <li>درباره ما</li>
                <li>سبد خرید</li>
                <li>حساب کاربری من</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-yekanEB mb-5 dark:text-slate-100">بخش های سایت</h3>
              <ul className="leading-[40px] dark:text-slate-200">
                <li>اشتراک ویژه</li>
                <li>وبلاگ</li>
                <li>فروشگاه</li>
                <li>پرداخت قسطی</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-yekanEB mb-5 text-center sm:text-start dark:text-slate-100">نمادهای سایت</h3>
              <div className="flex  gap-3">
                <img src={enamad} className="w-24" alt="" />
                <img src={samandehi} className="w-24" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-[88%] mx-auto items-center md:gap-10 gap-3">
        <p className="w-fit text-[14px] dark:text-slate-300">تمامی حقوق برای اس پی کد محفوظ می باشد.</p>
        <div className="md:flex-1 w-full bg-[#6363C1] h-[2px]"></div>
        
        </div>
      </footer>
    </>
  );
};

export default Footer;
