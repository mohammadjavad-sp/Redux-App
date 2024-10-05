import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logoipsum-332.svg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { closeOffCanvas } from "../../Redux/slices/globals";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const OffCanvas = () => {
    const dispatch = useDispatch()
  return (
    <>
      <aside data-aos="fade-left" className="h-screen w-[300px] bg-white flex flex-col shadow-lg">
        <div className="flex justify-between p-3 items-center">
          <img src={logo} alt="" />
          <IoClose size={40} onClick={()=>dispatch(closeOffCanvas())} />
        </div>
        <ul className="p-4 flex flex-col flex-1 divide-y-2">
          <li className="h-12 flex items-center">
            <Link to="/Redux-App/">صفحه نخست</Link>
          </li>
          <li className="h-12 flex items-center">
            <Link to="/Redux-App/courses">دوره ها</Link>
          </li>
          <li className="h-12 flex items-center">
            <Link to="/Redux-App/articles">مقالات</Link>
          </li>
          <li className="h-12 flex items-center">
            <Link to="/Redux-App/about">درباره ما</Link>
          </li>
          <li className="h-12 flex items-center">
            <Link to="/Redux-App/contact">تماس با ما</Link>
          </li>
        </ul>
        <Button gradientDuoTone="purpleToBlue" className="m-5">ورود/ثبت نام</Button>
      </aside>
    </>
  );
};

export default OffCanvas;
