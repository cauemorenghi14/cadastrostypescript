import { RouterProvider } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { router } from "./routes/routes";

export const App = () => {
  return (
    <AppThemeProvider>
      <RouterProvider router={router}/>
    </AppThemeProvider>
  );
};
