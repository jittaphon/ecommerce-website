import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#" },
  { title: "Contact", link: "/#" },
  { title: "Blog", link: "/#" },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href=""
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              EShop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              2022年7月より夏アニメ(7月〜9月)として放送されるアニメ作品の声優・スタッフ・PV・制作会社などの情報をまとめました
            </p>
            <p className="text-gray-500 mt-4">Made with heart by Kumiko</p>
            <a
              href=""
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit My Github
            </a>
          </div>
          {/*Footer links*/}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/*first col links*/}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/*second col links*/}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/*Company address*/}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida , Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+88 568547</p>
                </div>
              </div>
              {}
              <div className="flex items-center gap-3 mt-6">
                {" "}
                <a href="">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
