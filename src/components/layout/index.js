import { makeStyles } from '@material-ui/core'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.dark,
        display: "flex",
        height:"100vh",
        overflow:"hidden",
        width: "100vw"
    }
}))

function Layout({ children }) {
    const classes = useStyles()
    return (
        <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
     <div className={classes.root}>
        <div>topbar</div>
        <div>navbar</div>
        <div>{children}</div>
        
    </div>
     </div>
    )}

export default Layout