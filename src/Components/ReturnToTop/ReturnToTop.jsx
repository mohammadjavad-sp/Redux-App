import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ReturnToTop = () => {
  const toUp = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 400) {
        toUp.current.style.display = "none";
      } else {
        toUp.current.style.display = "flex";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={toUp}
        onClick={() => scrollTo(0, 0)}
        className="size-[45px] cursor-pointer fixed bottom-10 left-10 z-[999] rounded-xl bg-slate-200 dark:bg-dark3 dark:text-slate-200 flex justify-center items-center"
      >
        <FaArrowUp size={20} />
      </div>
    </>
  );
};

export default ReturnToTop;
