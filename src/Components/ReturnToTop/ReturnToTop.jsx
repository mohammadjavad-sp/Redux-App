import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ReturnToTop = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        onClick={() => scrollTo(0, 0)}
        className="size-[45px] cursor-pointer fixed bottom-10 left-10 z-[999] rounded-xl bg-slate-200 dark:bg-dark3 dark:text-slate-200 flex justify-center items-center"
        data-aos="fade-up"
      >
        <FaArrowUp size={20} />
      </div>
    </>
  );
};

export default ReturnToTop;
