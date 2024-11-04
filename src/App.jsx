import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import ArticlesPage from "./Pages/ArticlesPage/ArticlesPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Menu from "./Components/Menu/Menu";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CoursePage from "./Pages/CoursesPage/CoursePage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ReturnToTop from "./Components/ReturnToTop/ReturnToTop";
import Support from "./Components/Support/Support";
import AOS from "aos";
import "aos/dist/aos.css";
import CartPage from "./Pages/CartPage/CartPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ArticlePage from "./Pages/ArticlesPage/ArticlePage";
import AddArticle from "./Pages/ArticlesPage/AddArticle";
import EditArticle from "./Pages/ArticlesPage/EditArticle";
import PanelPage from "./Pages/PanelPage/PanelPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PreLoader from "./Components/PreLoader/PreLoader";

AOS.init();
function App() {
  const [loading, setLoading] = useState(true);
  const { darkMode } = useSelector((store) => store.globals);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "rgb(31,41,55)";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#fff";
    }
  }, [darkMode]);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    const backupTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(backupTimer);
    }
  }, []);

  return loading ? (
    <PreLoader />
  ) : (
    <>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route
          path="/Redux-App"
          element={<Navigate to="/Redux-App/home" replace />}
        />
        <Route path="/Redux-App/home" element={<HomePage />} />
        <Route path="/Redux-App/courses" element={<CoursesPage />} />
        <Route path="/Redux-App/courses/:id" element={<CoursePage />} />
        <Route path="/Redux-App/articles" element={<ArticlesPage />} />
        <Route path="/Redux-App/articles/addArticle" element={<AddArticle />} />
        <Route path="/Redux-App/articles/:id" element={<ArticlePage />} />
        <Route
          path="/Redux-App/articles/editArticle/:id"
          element={<EditArticle />}
        />
        <Route path="/Redux-App/about" element={<AboutPage />} />
        <Route path="/Redux-App/contact" element={<ContactPage />} />
        <Route path="/Redux-App/cart" element={<CartPage />} />
        <Route path="/Redux-App/login" element={<LoginPage />} />

        <Route
          path="/Redux-App/panel"
          element={
            <PrivateRoute>
              <PanelPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Support />
      <ReturnToTop />
    </>
  );
}

export default App;
