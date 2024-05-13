import { LANG } from "./langConstants";

const Language = ({ lang }) => {
  const data = LANG[lang];

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
  );
};

export default Language;
