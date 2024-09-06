import { useTheme } from "next-themes";
import "./styles.css";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label className={`container ${theme === "dark" ? "IsLight" : "IsDark"}`}>
      <input
        type="checkbox"
        defaultChecked={theme === "dark" ? false : true}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div />
    </label>
  );
};

export default ThemeSwitcher;
