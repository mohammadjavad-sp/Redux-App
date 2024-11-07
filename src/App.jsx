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
    };
  }, []);

  return loading ? (
    <PreLoader />
  ) : (
    <>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:id" element={<CoursePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="articles/addArticle" element={<AddArticle />} />
        <Route path="articles/:id" element={<ArticlePage />} />
        <Route path="articles/editArticle/:id" element={<EditArticle />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="panel"
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
