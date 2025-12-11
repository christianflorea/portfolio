export const theme = {
  colors: {
    background: "#f9f7f0ff",
    text: "#0A400C",
    textLight: "#5d6a47ff",
    primary: "#819067",
    primaryDark: "#0A400C",
    secondary: "#B1AB86",
    accent: "#B1AB86",
    border: "#B1AB86",
    card: "#FFFFFF",
    cardHover: "#FDFCF5",
  },
  fonts: {
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  breakpoints: {
    mobile: "500px",
    tablet: "768px",
    desktop: "1024px",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  shadows: {
    // Updated shadows to be slightly green-tinted instead of pure black/gray
    sm: "0 1px 2px 0 rgba(10, 64, 12, 0.05)",
    md: "0 4px 6px -1px rgba(10, 64, 12, 0.1)",
    lg: "0 10px 15px -3px rgba(10, 64, 12, 0.1)",
  },
};

export type Theme = typeof theme;
