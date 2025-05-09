import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  Collapse
} from '@mui/material';
import logo from '../assets/logo.png';
import '../style/Navbar.css'
import { Options } from './Options';

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar position="static" sx={{ padding: 2, backgroundColor: 'secondary.main', borderBottom: 'solid 8px #5E2B5A' }}>
        <Toolbar className="navBar">

          <Box component="img" src={logo} alt="logo" loading="lazy"/>

          {!isMobile && <Options />}
        </Toolbar>
      </AppBar>
      <Collapse in={isMobile} timeout="auto" unmountOnExit>
        <Options />
      </Collapse>
    </>
  );
};
