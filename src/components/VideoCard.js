import { Box, Typography, Avatar, makeStyles } from '@material-ui/core'


function VideoCard( item ) {
    return (
        <Box>
            <img alt={item.title} src={item.thumb} />
            <Box display="flex" mt="1">
                <Box>
                    <Avatar alt={item.authorName} src={item.authorAvatar}>
                        SS
                    </Avatar> 
                </Box>
                <Box>
                <Typography
                    className={classes.caption}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                >
                    {item.title}
                </Typography>
                <Typography display="block" variant="body2" color="textSecondary">
                    {item.authorName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
                </Box>
            </Box>
        </Box>
    )
}