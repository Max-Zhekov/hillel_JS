import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Contacts from "./components/pages/Contacts";
import AboutMe from "./components/pages/AboutMe";
import { ThemeContext, themes } from "./themeContext";
import { useState, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme.name);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Router>
        <ErrorBoundary>
          <div
            className="content"
            style={{ background: theme.background, minHeight: "100vh" }}>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/aboutMe" element={<AboutMe />} />
              </Routes>
            </main>
          </div>
        </ErrorBoundary>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
