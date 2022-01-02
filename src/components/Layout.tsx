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
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { config } from 'node-config-ts';
import { FormattedMessage } from 'react-intl';
import { signOut, useSession } from 'next-auth/react';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(3),
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

export const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

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
          {status === 'authenticated' && typeof session?.trainerName === 'string' && (
            <div style={{ padding: 16, transition: '0.3s' }}>
              {session?.user?.image && (
                <Avatar sx={{ width: 60, height: 60, transition: '0.3s' }} src={session.user.image} />
              )}
              <Typography variant={'h6'} noWrap>
                {session.trainerName}
              </Typography>
            </div>
          )}
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
                    id="drawer.general_leaderboard"
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
                  <FormattedMessage
                    defaultMessage="Day leaderboard"
                    id="drawer.day_leaderboard"
                    description="Day leaderboard link in drawer"
                  />
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
                  <FormattedMessage
                    defaultMessage="Week leaderboard"
                    id="drawer.week_leaderboard"
                    description="Week leaderboard link in drawer"
                  />
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
                  <FormattedMessage
                    defaultMessage="Month leaderboard"
                    id="drawer.month_leaderboard"
                    description="Month leaderboard link in drawer"
                  />
                }
              />
            </ListItem>
          </Link>
          {config.enableAuth && (
            <ListItem button component="a" onClick={() => signOut()}>
              <ListItemIcon>
                <PowerSettingsNewIcon />
              </ListItemIcon>
              <ListItemText
                primary={<FormattedMessage defaultMessage="Logout" id="drawer.logout" description="Logout button" />}
              />
            </ListItem>
          )}
        </List>
      </Drawer>
      <Main>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
