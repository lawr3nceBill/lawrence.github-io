import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(null);
  const [isSun, setIsSun] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleIcon = () => {
    setIsSun(!isSun);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleIcon}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        {isSun ? (
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <FiSun size={24} color="#000000" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <FiMoon size={24} color="#FFFFFF" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}

export default ThemeSwitcher;
