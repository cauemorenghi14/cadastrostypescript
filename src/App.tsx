import { RouterProvider } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { router } from "./routes/routes";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <MenuLateral>
        <RouterProvider router={router}/>
      </MenuLateral>
    </AppThemeProvider>
  );
};
