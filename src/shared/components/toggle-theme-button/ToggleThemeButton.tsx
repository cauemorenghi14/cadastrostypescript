import { Button } from "@mui/material"
import { useAppThemeContext } from "../../contexts"
import { Brightness1, Brightness7, ModeNight, Nightlight } from "@mui/icons-material"

export const ToggleThemeButton = () => {

    const { toggleTheme, themeName } = useAppThemeContext()

    return (
        <>
            {themeName === 'light'
                ?
                    <Button variant="contained" onClick={toggleTheme}>
                        Trocar para escuro <ModeNight />
                    </Button>
                :
                    <Button variant="contained" onClick={toggleTheme}>
                        Trocar para claro <Brightness7 />
                    </Button>
            }
        </>
    )
}