import { Button } from "@mui/material"
import { useAppThemeContext } from "../../contexts"

export const ToggleThemeButton = () => {

    const { toggleTheme } = useAppThemeContext()

    return (<Button variant="contained" onClick={toggleTheme}>testes</Button>)
}