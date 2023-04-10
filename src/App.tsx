import { CssBaseline, ThemeProvider } from "@mui/material";

import { createOverrideTheme } from "./theme.provider";
import { AppRouter, AuthProvider } from "./components/providers";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={createOverrideTheme()}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  );
}
