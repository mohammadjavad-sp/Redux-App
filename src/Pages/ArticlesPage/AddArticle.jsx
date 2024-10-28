import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { apiKey } from "../../key";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const AddArticle = () => {
  const [newArticle, setNewArticle] = useState({
    id: Date.now(),
    title: "",
    description: "",
    writter: "",
    category: "",
    image: "",
    readingTime: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const allFieldsFilled = Object.values(newArticle).every(
      (value) => value?.toString().trim() !== ""
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [newArticle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const fetchData = async () => {
    if (isButtonDisabled) return;

    Swal.fire({
      position: "center",
      icon: "success",
      title: "مقاله شما با موفقیت ساخته شد",
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
      const updatedData = [...existingData, newArticle];

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

      navigate("/Redux-App/articles");
    } catch (error) {
      Swal.fire("خطا", "خطایی در ارسال مقاله رخ داد", "error");
    }
  };

  return (
    <div className="flex w-[50%] flex-col gap-4 mx-auto my-10">
      <div>
        <Label htmlFor="title" value="عنوان مقاله" />
        <TextInput
          placeholder="عنوان مقاله را وارد کنید"
          type="text"
          sizing="md"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="description" value="توضیح کوتاه" />
        <TextInput
          placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
          type="text"
          sizing="md"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="writter" value="نویسنده مقاله" />
        <TextInput
          placeholder="نام نویسنده مقاله را وارد کنید"
          type="text"
          sizing="md"
          name="writter"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="category" value="موضوع مقاله" />
        <TextInput
          placeholder="موضوع مقاله را وارد کنید"
          type="text"
          sizing="md"
          name="category"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="image" value="عکس مقاله" />
        <TextInput
          placeholder="لینک عکس مقاله را وارد کنید"
          type="text"
          sizing="md"
          name="image"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="readingTime" value="مدت زمان خواندن" />
        <TextInput
          placeholder="مدت زمان خواندن"
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
        ساخت مقاله
      </Button>
    </div>
  );
};

export default AddArticle;
