import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/news.jpg";

const BlogData = [
  {
    title: "【PV付き】夏アニメ情報まとめ! 2022年7月から放送される作品一覧",
    subtitle:
      "2022年7月より夏アニメ(7月〜9月)として放送されるアニメ作品の声優・スタッフ・PV・制作会社などの情報をまとめました",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
  },
  {
    title: "【PV付き】夏アニメ情報まとめ! 2022年7月から放送される作品一覧",
    subtitle:
      "2022年7月より夏アニメ(7月〜9月)として放送されるアニメ作品の声優・スタッフ・PV・制作会社などの情報をまとめました",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
  },
  {
    title: "【PV付き】夏アニメ情報まとめ! 2022年7月から放送される作品一覧",
    subtitle:
      "2022年7月より夏アニメ(7月〜9月)として放送されるアニメ作品の声優・スタッフ・PV・制作会社などの情報をまとめました",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {BlogData.map((data) => (
            <div key={data.title} className="bg-white dark:bg-gray-900">
              {}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] oject-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
