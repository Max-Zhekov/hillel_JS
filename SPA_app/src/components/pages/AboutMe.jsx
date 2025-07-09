import { useContext } from "react";
import { ThemeContext } from "../../themeContext";

const AboutMe = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <section
      className="content"
      style={{
        color: theme.color,
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}>
      <h2>Про мене</h2>
      <p>
        Привіт! Мене звати Макс, я розробник додатків з досвідом роботи у React
        та веб-технологіях. Мені подобається створювати зручні та гарні
        інтерфейси, які роблять життя користувачів простішим.
      </p>

      <p>
        У вільний час я вивчаю нові технології, читаю книги та займаюся спортом.
        Моя мета — створювати якісні продукти та постійно розвиватися як
        професіонал.
      </p>

      <h3>Навички та технології</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML5 / CSS3 / SASS</li>
        <li>Git / GitHub</li>
      </ul>
    </section>
  );
};

export default AboutMe;
