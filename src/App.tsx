import { RouterProvider } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { router } from "./routes/routes";
import { MenuLateral } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <MenuLateral>
          <RouterProvider router={router}/>
        </MenuLateral>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
