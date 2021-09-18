import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<MuiAppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" id="page-title" />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link href="/" passHref>
            <ListItem button component="a" onClick={handleDrawerClose}>
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <FormattedMessage
                    defaultMessage="General leaderboard"
                    description="General leaderboard link in drawer"
                  />
                }
              />
            </ListItem>
          </Link>
          <Link href="/leaderboard/day" passHref>
            <ListItem button component="a" onClick={handleDrawerClose}>
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <FormattedMessage defaultMessage="Day leaderboard" description="Day leaderboard link in drawer" />
                }
              />
            </ListItem>
          </Link>
          <Link href="/leaderboard/week" passHref>
            <ListItem button component="a" onClick={handleDrawerClose}>
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <FormattedMessage defaultMessage="Week leaderboard" description="Week leaderboard link in drawer" />
                }
              />
            </ListItem>
          </Link>
          <Link href="/leaderboard/month" passHref>
            <ListItem button component="a" onClick={handleDrawerClose}>
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <FormattedMessage defaultMessage="Month leaderboard" description="Month leaderboard link in drawer" />
                }
              />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Main>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
