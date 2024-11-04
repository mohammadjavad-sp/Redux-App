import { Accordion, Button, Label, Radio, TextInput } from "flowbite-react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaSort } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  articlesBySort,
  articlesByWritter,
  fetchArticles,
  fetchArticlesByCategory,
} from "../../Redux/slices/articles";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import styles from "./ArticlesPage.module.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/images/animation/loading.json";
import { useTranslation } from "react-i18next";

const ArticlesPage = () => {
  const dispatch = useDispatch();
  const { allArticles, loading } = useSelector((store) => store.articles);
  const [WritterName, setWritterName] = useState("");
  const [sortName, setSortName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const { i18n, t } = useTranslation();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  useEffect(() => {
    if (!WritterName == "") {
      const resArticles = allArticles.filter((article) =>
        article.writter.includes(WritterName)
      );
      dispatch(articlesByWritter(resArticles));
    } else if (WritterName == "") {
      dispatch(fetchArticles());
    }
  }, [WritterName]);

  useEffect(() => {
    if (sortName === "newest") dispatch(articlesBySort("newest"));
    else if (sortName === "oldest") dispatch(articlesBySort("oldest"));
    else if (sortName === "shortest") dispatch(articlesBySort("shortest"));
    else if (sortName === "longest") dispatch(articlesBySort("longest"));
  }, [sortName]);

  useEffect(() => {
    if (categoryName === "allArticles") dispatch(fetchArticles());
    else if (categoryName === "programming")
      dispatch(fetchArticlesByCategory("programming"));
    else if (categoryName === "tech") dispatch(fetchArticlesByCategory("tech"));
    else if (categoryName === "social")
      dispatch(fetchArticlesByCategory("social"));
  }, [categoryName]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Lottie animationData={animation} />
      </div>
    );
  }

  return (
    <>
      <div
        className={`md:py-10 py-5 w-[88%] flex-col md:flex-row mx-auto flex justify-between items-center ${
          i18n.language == "en" && "ltr"
        }`}
      >
        <h1 className="text-3xl font-yekanEB dark:text-slate-100">
          {t("myArticles")}
        </h1>
        <div className="flex gap-3 my-5 md:my-0 flex-col sm:flex-row">
          <Button
            outline
            gradientDuoTone="purpleToPink"
            className="w-fit mx-auto "
          >
            <MdOutlineCreateNewFolder
              size={17}
              className="translate-y-[2px] mx-1"
            />
            <span className="translate-y-[1px]">
              <Link to="/Redux-App/articles/addArticle">{t("create")}</Link>
            </span>
          </Button>

          <TextInput
            type="text"
            sizing="md"
            placeholder={t("inputArticle")}
            className="border-0 text-[10px] dark:bg-dark2 rounded-lg w-44 sm:w-auto !ring-0 dark:text-slate-100"
            onChange={(e) => setWritterName(e.target.value)}
          />
        </div>
      </div>

      <section
        className={`flex flex-col lg:flex-row w-[88%] mx-auto justify-between gap-8 mb-10 ${
          i18n.language == "en" && "ltr"
        }`}
      >
        <aside className="lg:w-[25%] ">
          <div>
            <Accordion className="!rounded-none border-0 shadow-md" collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="focus:!ring-0 dark:text-slate-200 dark:bg-dark2 dark:hover:!bg-dark2">
                  <FaSort size="20px" className="inline mx-2" />
                  <b className="">{t("articlesSorts")}</b>
                </Accordion.Title>
                <Accordion.Content>
                  <fieldset className="flex max-w-md flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Radio
                        onChange={(e) => setSortName(e.target.value)}
                        name="sorts"
                        value="newest"
                        defaultChecked
                      />
                      <Label htmlFor="newest">{t("newest")}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        onChange={(e) => setSortName(e.target.value)}
                        name="sorts"
                        value="oldest"
                      />
                      <Label htmlFor="oldest">{t("oldest")}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        onChange={(e) => setSortName(e.target.value)}
                        name="sorts"
                        value="shortest"
                      />
                      <Label htmlFor="shortest">{t("shortest")}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        onChange={(e) => setSortName(e.target.value)}
                        name="sorts"
                        value="longest"
                      />
                      <Label htmlFor="longest">{t("longest")}</Label>
                    </div>
                  </fieldset>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <div className="mt-5">
            <Accordion className="!rounded-none border-0 shadow-md" collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="focus:!ring-0 dark:text-slate-200 dark:bg-dark2 dark:hover:!bg-dark2">
                  <BiCategoryAlt size="20px" className="inline mx-2" />
                  <b>{t("categorys")}</b>
                </Accordion.Title>
                <Accordion.Content>
                  <fieldset className="flex max-w-md flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Radio
                        name="categorys"
                        value="allArticles"
                        defaultChecked
                        onChange={(e) => setCategoryName(e.target.value)}
                      />
                      <Label htmlFor="allArticles"> {t("allArticles")}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        name="categorys"
                        value="programming"
                        onChange={(e) => setCategoryName(e.target.value)}
                      />
                      <Label htmlFor="programming">{t("programming")}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        name="categorys"
                        value="tech"
                        onChange={(e) => setCategoryName(e.target.value)}
                      />
                      <Label htmlFor="tech">{t("tech")}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        name="categorys"
                        value="social"
                        onChange={(e) => setCategoryName(e.target.value)}
                      />
                      <Label htmlFor="social">{t("social")}</Label>
                    </div>
                  </fieldset>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </aside>
        <main className="lg:w-[75%]  flex flex-wrap justify-between gap-3">
          {allArticles?.map((article) => (
            <div
              key={article.id}
              className={`lg:w-[32%] md:w-[48%] w-full ${styles.articleCard}`}
            >
              <ArticleCard data={article} />
            </div>
          ))}
        </main>
      </section>
      <Footer />
    </>
  );
};

export default ArticlesPage;
