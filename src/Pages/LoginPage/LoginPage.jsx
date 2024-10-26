import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../assets/images/logoipsum-332.svg";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
const LoginPage = () => {
  const [passIcon, setPassIcon] = useState(true);
  /* useEffect(()=>{
    if(passIcon){
        
    }
  },[passIcon]) */
  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <img src={logo} className="block mx-auto mb-5" alt="" />
            <h1 className="text-2xl font-bold sm:text-xl">
              به اس پی کد خوش آمدید :))
            </h1>
          </div>

          <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                نام و نام خانوادگی
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="نام و نام خانوادگی"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <FaUser className="text-slate-500" />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                رمز عبور
              </label>

              <div className="relative">
                <input
                  type={passIcon ? "password" : "text"}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder=" رمز عبور"
                />

                <span
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                  onClick={() => setPassIcon(!passIcon)}
                >
                  {passIcon ? (
                    <FaEyeSlash
                      size={20}
                      className="text-slate-500 cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      size={20}
                      className="text-slate-500 cursor-pointer"
                    />
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />

              <button
                type="button"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                ورود
              </button>
            </div>
          </form>

          <hr className="my-5" />

          <div className=" max-w-[450px] mx-auto flex items-center justify-center border-2 border-[#747474] shadow-xl py-3 rounded-full gap-1">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            ورود با گوگل
          </div>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
