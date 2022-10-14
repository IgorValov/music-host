import { useThemeContext } from "../context/theme";

export const Page = () => {
  const { theme } = useThemeContext();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <h1>Поменять тему!</h1>
    </div>
  );
};
