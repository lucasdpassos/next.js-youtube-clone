import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme => ({
    root: {
        boxShadow:"none",
        //zIndex: theme.zindex.drawer + 1,
        backgroundColor: theme.palette.background.default

    },


})))

function TopBar() {
    const classes = useStyles()
    return (
        <>
    
        <AppBar className={classes.root} color="default">
            <Toolbar>
                <Box>
                    <MenuIcon />
                    <img src="/" />
                </Box>
                <Box></Box>
                <Box></Box>               
            </Toolbar>
        </AppBar>

        </>
    )
}

export default TopBar