import React from "react";
import LightButton from "../../assets/image1.png";
import DarkButton from "../../assets/image2.png";
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem(theme) : "light"
  );

  const element =
    document.documentElement; /*เอา ตัว file index.html มา เพื่อที่เราจะได้ add class เพื่อทำ dark mode and light mode*/

  React.useEffect(() => {
    localStorage.getItem("theme", theme);
    console.log(element);
    if (theme == "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        src={LightButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme == "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        src={DarkButton}
        alt=""
        className={`w-12 cursor-pointer}`}
      />
    </div>
  );
};

export default DarkMode;
