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

          <Box flex={1}>
            <List component="nav">
              <ListItemLink icon="home" label="Página Inicial" onClick={toggleDrawerOpen} to="/"/>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        <Outlet />
      </Box>
    </>
  );
};
