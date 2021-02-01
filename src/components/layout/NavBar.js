import {
    makeStyles,
    Hidden,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Avatar,
    Divider,
    Typography,
    Button
} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { signIn, useSession } from 'next-auth/client';

const useStyles = makeStyles((theme) => ({
    mobileDrawer: {
      width: 240,
    },
    desktopDrawer: {
      width: 240,
      top: 56,
      height: 'calc(100% - 64px)',
      borderRight: 'none',
    },
    avatar: {
      cursor: 'pointer',
      width: 24,
      height: 24,
    },
    listItem: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: theme.spacing(3),
    },
    listItemText: {
      fontSize: 14,
    },
  }));



function NavBar() {
    const classes = useStyles()

    const content = (
        <Box height="100%" display="flex" flexDirection="column"> </Box>
    )

    return (
    <Hidden mdDown>
        <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
        >
            {content}
        </Drawer>

    </Hidden>

)
}

export default NavBar;