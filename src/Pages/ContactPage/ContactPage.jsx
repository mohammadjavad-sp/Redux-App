import phone from "../../assets/images/contact/phone.png";
import wave from "../../assets/images/contact/wave.svg";
import shape from "../../assets/images/contact/shape.svg";
import quest1 from "../../assets/images/contact/quests.webp";
import quest2 from "../../assets/images/contact/quest2.svg";
import { Button, Label, TextInput } from "flowbite-react";
import Acordion from "../../Components/Accordion/Accordion";
import styles from "./ContactPage.module.css";
import Footer from "../../Components/Footer/Footer";
const ContactPage = () => {
  return (
    <>
      <header className="bg-[#1C1732] pt-20 ">
        <div className="flex items-center w-[70%] mx-auto justify-between">
          <div className="text-center leading-[50px]">
            <p className="text-[35px] text-[#F56913]">اگر سوالی دارید!</p>
            <p className="text-[24px] text-white">
              منتظر شنیدن صدای گرم شما هستیم!
            </p>
            <p className="text-[30px] text-[#FE02FF] font-yekanN">
              09012345678
            </p>
          </div>
          <div>
            <img src={phone} alt="" />
          </div>
        </div>
        <img src={wave} className="rotate-180 w-full" alt="" />
      </header>

      <section className="bg-white translate-y-[-1px] flex flex-col items-center py-20 mx-auto">
        <div className="relative flex flex-col items-center">
          <img src={shape} className="w-[300px]" />
          <h2 className="absolute top-4 right-[225px] text-[23px]">
            فرم تماس با ما
          </h2>
          <p className="text-[#DD7600] text-[30px]">
            مشتاقانه منتظر شنیدن صدای گرم شما هستیم!
          </p>
        </div>
        <div className="py-10 w-[88%] mx-auto">
          <div className="flex w-full flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="نام شما" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing="md"
                className="w-full"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="ایمیل شما" />
              </div>
              <TextInput id="base" type="text" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="موضوع" />
              </div>
              <TextInput id="base" type="text" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="large" value="پیغام شما (اختیاری)" />
              </div>
              <textarea
                name=""
                style={{ resize: "none" }}
                className="w-full rounded-lg bg-[#F9FAFB] border-[#D1D5DB] h-44"
              ></textarea>
            </div>
          </div>
          <Button color="purple" className="mt-5 px-10">
            ثبت
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="flex items-start w-[88%] justify-between mx-auto gap-10">
          <div className="w-[50%]">
            <img src={quest1} alt="" />
          </div>
          <div className="w-[50%]">
            <img src={quest2} className=" block mx-auto" />
            <div>
              <p className="mt-16 text-red-500 text-xl mb-4">
                سوالات متداول مشتریان
              </p>
              <Acordion />
            </div>
          </div>
        </div>
      </section>

      <div className="pt-44 bg-white">
        <div
          className={`${styles.khabarName} w-full pt-16 pb-10 flex flex-col items-center justify-center`}
        >
          <p className="text-[#FF9F07] font-yekanEB text-[20px]">
            از پیشنهادات ویژه ما سریع تر با خبر شوید!
          </p>
          <p className="text-white text-[16px]">
            پیشنهادات خاص و تخفیف های ما را زودتر از بقیه دریافت کنید.
          </p>
          <div className="flex rounded-full mt-10 bg-slate-500/10 p-2">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="bg-transparent border-0 text-white !ring-0"
            />
            <input
              type="email"
              placeholder="آدرس ایمیل"
              className="bg-transparent border-0 text-white !ring-0"
            />
            <Button
              color="failure"
              className="w-[60px] h-[60px] rounded-full flex justify-center items-center"
            >
              ارسال
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
