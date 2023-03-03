import React from "react";
import i18n from "../../i18n";
import english from "../../languages/UK.png";
import ukrainian from "../../languages/UA.png";
import s from "./LanguageSwitcher.module.css";

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button
        type="button"
        className={s.loclIcon}
        onClick={() => changeLanguage("en")}
      >
        <img
          className={s.icon}
          src={english}
          alt="UK flag"
          width="30"
          height="20"
        />
      </button>
      <button
        type="button"
        className={s.loclIcon}
        onClick={() => changeLanguage("ua")}
      >
        <img
          className={s.icon}
          src={ukrainian}
          alt=" UA flag"
          width="30"
          height="20"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
