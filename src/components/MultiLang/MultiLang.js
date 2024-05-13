import { useState } from "react";
import Language from "./Language";

const MultiLang = () => {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="sp">Spanish</option>
        <option value="ru">Russian</option>
      </select>
      <Language lang={lang} />
    </div>
  );
};

export default MultiLang;
