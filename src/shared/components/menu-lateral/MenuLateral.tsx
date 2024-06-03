import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { Outlet } from "react-router-dom";
import { ListItemLink } from "./ListItemLink";
import { ToggleThemeButton } from "../toggle-theme-button/ToggleThemeButton";


export const MenuLateral = () => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm")); //se a tela estiver abaixo de sm, smDown = true

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        onClose={toggleDrawerOpen}
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://github.com/cauemorenghi14.png"
            />
          </Box>

          <Divider />

          <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between">
            <List component="nav">
              <ListItemLink icon="home" label="Página Inicial" onClick={toggleDrawerOpen} to="/"/>
              <ListItemLink icon="person" label="Página de Usuários" onClick={toggleDrawerOpen} to="/usuários"/>
            </List>
            <ToggleThemeButton />
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        <Outlet />
      </Box>
    </>
  );
};
