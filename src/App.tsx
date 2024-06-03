import { RouterProvider } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { router } from "./routes/routes";
import { DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
          <RouterProvider router={router} />
      </DrawerProvider>
    </AppThemeProvider>
  );
};

//<RouterProvider router={router}/>
