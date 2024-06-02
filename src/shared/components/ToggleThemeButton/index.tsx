import { Button } from "@mui/material"
import { useDrawerContext } from "../../contexts"

export const ToggleThemeButton = () => {

    const { toggleDrawerOpen } = useDrawerContext()

    return (<Button variant="contained" onClick={toggleDrawerOpen}>menu</Button>)
}