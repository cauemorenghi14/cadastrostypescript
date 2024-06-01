import { createBrowserRouter } from "react-router-dom"
import { ToggleThemeButton } from "../shared/components/ToggleThemeButton"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ToggleThemeButton />
    }
])