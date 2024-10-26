import axios from "axios";
import { apiKey } from "../../key";
import { Button } from "flowbite-react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
const ArticlesPage = () => {
  /* const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.jsonbin.io/v3/b/671d4cfaacd3cb34a89d7b0f",
        {
          headers: {
            "X-Master-Key": apiKey, // استفاده از کلید به‌عنوان متغیر محیطی
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); */
  return (
    <>
      <div className="py-10 w-[88%] mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-yekanEB">مقالات ما</h1>
        <div className="flex gap-3">
          <Button outline gradientDuoTone="purpleToPink" className="">
            <MdOutlineCreateNewFolder
              size={17}
              className="translate-y-[2px] ml-1"
            />
            <span className="translate-y-[1px]">ساخت مقاله</span>
          </Button>

          <div className="flex rounded-lg border-2">
            <input type="text" className="border-0 rounded-lg" />
            <Button color="dark" className="rounded-none rounded-l-md">
              جستجو
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
