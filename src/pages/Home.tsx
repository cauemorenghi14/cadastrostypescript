import { useMediaQuery, useTheme } from "@mui/material";
import { ToggleThemeButton } from "../shared/components/ToggleThemeButton";

const Home = () => {
    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {smDown &&
                <ToggleThemeButton />
            }
        </>
     );
}
 
export default Home;