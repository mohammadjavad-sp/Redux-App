import { Card } from "flowbite-react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router-dom";

const ArticleCard = ({ data }) => {
  const customTheme = {
    root: {
      children: "flex h-full flex-col justify-center gap-4 p-5 pb-0",
    },
  };
  return (
    <>
      <Card
        theme={customTheme}
        imgSrc={data.image}
        className="rtl"
      >
        <h5 className="text-lg font-bold tracking-tight text-rang1 dark:text-white h-14 line-clamp-2 hover:text-blue-600 duration-300">
          <Link  to={`/articles/${data.id}`}>
          {data.title}
          </Link>
        </h5>
        <p className="font-normal text-sm line-clamp-2 text-slate-500 dark:text-gray-400">
          {data.description}
        </p>
        <p className="flex items-center gap-1 text-sm text-slate-600 font-bold dark:text-slate-300">
          <MdOutlineCreate />
          {data.writter}
        </p>
        <span>
          <Link
            className="flex gap-1 items-center text-xs text-blue-600 font-bold"
            to={`/articles/${data.id}`}
          >
            مشاهده بیشتر
            <FaLongArrowAltLeft />
          </Link>
        </span>
        <div className="flex justify-between border-t py-2 dark:text-slate-200">
          <p className="text-sm">{data.category}</p>
          <p className="flex items-center gap-1 text-sm font-yekanN">
            {data.readingTime}
            <IoMdTime className="translate-y-[-1px]" />
          </p>
        </div>
      </Card>
    </>
  );
};

export default ArticleCard;
