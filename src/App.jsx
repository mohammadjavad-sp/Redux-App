import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import ArticlesPage from "./Pages/ArticlesPage/ArticlesPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Menu from "./Components/Menu/Menu";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const {darkMode} = useSelector(store => store.globals)
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark")
      document.body.style.backgroundColor = "rgb(31,41,55)"
    }else{
      document.documentElement.classList.remove("dark")
      document.body.style.backgroundColor = "#F4F5F7"

    }
  },[darkMode])
  
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/Redux-App/" element={<HomePage />} />
        <Route path="/Redux-App/courses" element={<CoursesPage />} />
        <Route path="/Redux-App/articles" element={<ArticlesPage />} />
        <Route path="/Redux-App/about" element={<AboutPage />} />
        <Route path="/Redux-App/contact" element={<ContactPage />} />
      </Routes>
      
    </>
  );
}

export default App;
