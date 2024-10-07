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
        className="w-full pb-10 bg-white"
        style={{ boxShadow: "1px 1px 5px gray" }}
      >
        <div className="w-[88%] mx-auto flex justify-between items-center py-10 border-b-2 border-b-[#BA08FA]">
          <div>
            <p className="text-[30px] font-yekanEB">
              تلفن:{" "}
              <span className="font-yekanN font-bold text-[#6363C1]">
                7654321 021
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 border-b-[2px] border-b-[#6363C1]">
              <FaInstagram size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 border-b-[2px] border-b-[#6363C1]">
              <FaTelegram size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 border-b-[2px] border-b-[#6363C1]">
              <FaWhatsapp size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 border-b-[2px] border-b-[#6363C1]">
              <FaXTwitter size={25} />
            </div>
            <div className="p-[7px] rounded-lg cursor-pointer bg-gray-200 border-b-[2px] border-b-[#6363C1]">
              <FaLinkedinIn size={25} />
            </div>
          </div>
        </div>
        <div className="flex w-[88%] mx-auto items-center pt-6">
          <div className="w-4/12 pt-10">
            <img src={logo} className="w-20 mb-5" />
            <p className="pl-16">
              برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <p className="mt-14 translate-y-6">تمامی حقوق برای اس پی کد محفوظ می باشد.</p>
          </div>
          <div className="flex w-8/12 py-16 justify-between border-b-2 border-[#6363C1]">
            <div>
              <h3 className="font-yekanEB mb-5">دسترسی سریع</h3>
              <ul className="leading-[40px]">
                <li>تماس با ما</li>
                <li>درباره ما</li>
                <li>سبد خرید</li>
                <li>حساب کاربری من</li>
              </ul>
            </div>
            <div>
              <h3 className="font-yekanEB mb-5">بخش های سایت</h3>
              <ul className="leading-[40px]">
                <li>اشتراک ویژه</li>
                <li>وبلاگ</li>
                <li>فروشگاه</li>
                <li>پرداخت قسطی</li>
              </ul>
            </div>
            <div>
              <h3 className="font-yekanEB mb-5">نمادهای سایت</h3>
              <div className="flex">
                <img src={enamad} alt="" />
                <img src={samandehi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
