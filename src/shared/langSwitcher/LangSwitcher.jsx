import { useTranslation } from "react-i18next";
import "../langSwitcher/LangSwitcher.css";

import globalIcon from "../../assets/imagens/SVGs/global.svg";

const langOptions = [{ lang: "pt" }, { lang: "en" }];

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLang = (selectedLang) => {
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
  };

  return (
    <>
      <section className="lang-switcher">
        {langOptions.map((item) => {
          return (
            <button className={i18n.language === item.lang ? "lang-option active" : "lang-option"} key={item.lang} onClick={() => switchLang(item.lang)}>
              {item.lang.toUpperCase()}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default LangSwitcher;
