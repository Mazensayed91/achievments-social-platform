import React from 'react';
import moment from 'moment';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles"

const Achievement = ({ achievement }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            {console.log("achie", achievement)}
            <CardMedia className={classes.media} image={achievement.selectedFile} title={achievement.title}/>
            <div className={classes.overlay}>
                <Typography varient="h6">
                    {achievement.creator}
                </Typography>
                <Typography varient="h6">
                    {moment(achievement.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            <div>
                <Typography varient="body2" color="textSecondary">{achievement.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5">
                    {achievement.message}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Likes {achievement.likeCount}

                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Achievement;