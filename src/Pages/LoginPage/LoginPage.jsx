import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../assets/images/logoipsum-332.svg";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import animation from "../../assets/images/animation/Animation.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../Redux/slices/login";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { jwtDecode } from "jwt-decode";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("نام الزامی است")
    .min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد")
    .max(50, "نام و نام خانوادگی نمی‌تواند بیشتر از ۵۰ حرف باشد"),
  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(6, "رمز عبور باید حداقل ۶ حرف باشد")
    .max(20, "رمز عبور نمی‌تواند بیشتر از ۲۰ حرف باشد"),
});

const LoginPage = () => {
  const [passIcon, setPassIcon] = useState(true);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [recaptchaColor, setRecaptchaColor] = useState(0);
  const [langDirection, setLangDirection] = useState("");

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { darkMode } = useSelector((store) => store.globals);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setRecaptchaColor((prevState) => prevState + 1);
  }, [darkMode]);

  useEffect(() => {
    setLangDirection(i18n.language === "en" ? "ltr" : "rtl");
  }, [i18n.language]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });

  const onSubmit = (data) => {
    if (isValid && recaptchaVerified) {
      const user = { ...data, token: data.username };
      dispatch(loginSuccess(user));
      navigate("/Redux-App/panel");
    }
  };

  const handleRecaptchaChange = (value) => {
    if (value) setRecaptchaVerified(true);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "476012426569-8siuutqb7hnlqu2hdp3k8e9fglam1m36.apps.googleusercontent.com",
      callback: (response) => {
        const { name, picture } = jwtDecode(response.credential);
        dispatch(loginSuccess({ picture, token: name }));
        navigate("/Redux-App/panel");
      },
    });

    google.accounts.id.renderButton(document.querySelector(".sign-in"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <section
        className={`relative flex flex-wrap lg:h-screen lg:items-center w-[88%] mx-auto ${langDirection}`}
      >
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <img src={logo} className="block mx-auto mb-5" alt="" />
            <h1 className="text-2xl font-bold sm:text-xl dark:text-slate-100">
              {t("login.titr")}
            </h1>
          </div>

          <form
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="username" className="sr-only">
                {t("login.name")}
              </label>

              <div className="relative">
                <input
                  type="text"
                  className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-dark2 dark:border-0 dark:text-slate-100 ${
                    errors.username &&
                    "focus:!border-red-500 focus:!ring-red-500"
                  }`}
                  placeholder={t("login.name")}
                  {...register("username")}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <FaUser className="text-slate-500" />
                </span>
              </div>
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                {t("login.pass")}
              </label>

              <div className="relative">
                <input
                  type={passIcon ? "password" : "text"}
                  className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-dark2 dark:border-0 dark:text-slate-100 ${
                    errors.password &&
                    "focus:!border-red-500 focus:!ring-red-500"
                  }`}
                  placeholder={t("login.pass")}
                  {...register("password")}
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
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
              <ReCAPTCHA
                sitekey="6LcgXHEqAAAAABEP9RSCw_ncoxlvio81IMwJVX7j"
                onChange={handleRecaptchaChange}
                theme={darkMode ? "dark" : "light"}
                key={recaptchaColor}
              />

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white disabled:bg-gray-500"
                disabled={!isValid || !recaptchaVerified}
              >
                {t("login.login")}
              </button>
            </div>
          </form>

          <hr className="my-5" />

          <div className="flex justify-center custom-google-button">
            <div className="sign-in"></div>
          </div>
        </div>

        <div className="relative w-[70%] mx-auto mb-10 lg:mb-0 lg:w-1/2">
          <Lottie animationData={animation} />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
