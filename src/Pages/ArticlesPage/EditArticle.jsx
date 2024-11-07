import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { apiKey } from "../../key";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const EditArticle = () => {
  const [newArticle, setNewArticle] = useState({});
  const { id } = useParams();
  const { allArticles } = useSelector((store) => store.articles);

  useEffect(() => {
    const articleById = allArticles?.find((article) => article.id == id);
    setNewArticle(articleById);
  }, []);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const allFieldsFilled = Object.values(newArticle).every(
      (value) => value?.toString().trim() !== ""
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [newArticle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const fetchData = async () => {
    if (isButtonDisabled) return;

    Swal.fire({
      position: "center",
      icon: "success",
      title: "مقاله شما با موفقیت ویرایش شد",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    try {
      const response = await axios.get(
        "https://api.jsonbin.io/v3/b/671d4cfaacd3cb34a89d7b0f",
        {
          headers: { "X-Master-Key": apiKey },
        }
      );
      const existingData = response.data.record;

      const updatedData = existingData.map((article) =>
        article.id === parseInt(id) ? { ...article, ...newArticle } : article
      );

      await axios.put(
        "https://api.jsonbin.io/v3/b/671d4cfaacd3cb34a89d7b0f",
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": apiKey,
          },
        }
      );

      navigate("/articles");
    } catch (error) {
      Swal.fire("خطا", "خطایی در ارسال مقاله رخ داد", "error");
    }
  };

  return (
    <div
      className={`flex lg:w-[50%] w-[80%] flex-col gap-4 mx-auto my-10 ${
        i18next.language == "en" && "ltr"
      }`}
    >
      <div>
        <Label htmlFor="title" value={t("title")} />
        <TextInput
          value={newArticle.title}
          placeholder={t("title2")}
          type="text"
          sizing="md"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="description" value={t("desc")} />
        <TextInput
          value={newArticle.description}
          placeholder={t("desc2")}
          type="text"
          sizing="md"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="writter" value={t("writter")} />
        <TextInput
          value={newArticle.writter}
          placeholder={t("writter2")}
          type="text"
          sizing="md"
          name="writter"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="category" value={t("subject")} />
        <TextInput
          value={newArticle.category}
          placeholder={t("subject2")}
          type="text"
          sizing="md"
          name="category"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="image" value={t("img")} />
        <TextInput
          value={newArticle.image}
          placeholder={t("img2")}
          type="text"
          sizing="md"
          name="image"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="readingTime" value={t("readingTime")} />
        <TextInput
          value={newArticle.readingTime}
          placeholder={t("readingTime2")}
          type="number"
          sizing="md"
          name="readingTime"
          onChange={handleChange}
        />
      </div>
      <Button
        onClick={fetchData}
        disabled={isButtonDisabled}
        gradientMonochrome="info"
        className="w-fit"
      >
        {t("articleBtn2")}
      </Button>
    </div>
  );
};

export default EditArticle;
