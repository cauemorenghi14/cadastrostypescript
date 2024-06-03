import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import { MenuLateral } from "../shared/components"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MenuLateral />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
])