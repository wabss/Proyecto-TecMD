import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Collapse,
} from '@mui/material';
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import logo from '../../assets/logo.png';
import '../../style/Navbar.css'
import { Options } from './Options';

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => setMenuState((prev) => !prev);

  return (
    <>
      <AppBar position="static" sx={{ padding: 2, backgroundColor: 'tertiary.main' }}>
        <Toolbar className="navBar">
          {isMobile && (
            <IconButton sx={{ mr: 2, color: '#fff' }} onClick={toggleMenu}>
              <Menu />
            </IconButton>
          )}

          <Box component="img" src={logo} alt="logo" loading="lazy"/>

          {!isMobile && <Options />}
        </Toolbar>
      </AppBar>
      <Collapse in={isMobile && menuState} timeout="auto" unmountOnExit>
        <Options />
      </Collapse>
    </>
  );
};
