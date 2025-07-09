import { useContext } from "react";
import { ThemeContext } from "../../themeContext";

const Contacts = () => {
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
      <h2>Контакти</h2>
      <p>
        Якщо у вас є питання, пропозиції або хочете зв’язатися зі мною,
        скористайтеся наведеними нижче даними:
      </p>

      <ul>
        <li>
          <strong>Телефон:</strong>{" "}
          <a
            href="tel: +380505994894"
            style={{ color: theme.accent, textDecoration: "none" }}>
            +380505994894
          </a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:maxzhekov07@gmail.com"
            style={{ color: theme.accent, textDecoration: "none" }}>
            maxzhekov07@gmail.com
          </a>
        </li>
        <li>
          <strong>Адреса:</strong> м. Одеса вул. Одеська 58
        </li>
      </ul>

      <h3>Соціальні мережі</h3>
      <ul>
        <li>
          <a
            href="https://t.me/maxzhekov"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.accent }}>
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/max-zhekov-584923324/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.accent }}>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Max-Zhekov"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.accent }}>
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
