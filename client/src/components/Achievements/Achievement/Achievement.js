import React from 'react';
import moment from 'moment';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles"
import {useDispatch} from "react-redux";
import {deleteAchievement, likeAchievement} from "../../../redux/actions/achievements";

const Achievement = ({ achievement, setCurrentId, currentId }) => {
    const dispatch = useDispatch()
    const deleteAch = () => {
        dispatch(deleteAchievement(achievement._id))
    }
    const like = () => {
        dispatch(likeAchievement(achievement._id))
    }
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
                <Button style={{color:'white'}} size="small" onClick={() => {setCurrentId(achievement._id)}}>
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
                <Button size="small" color="primary" onClick={like}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Likes {achievement.likeCount}

                </Button>
                <Button size="small" color="primary" onClick={deleteAch}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default Achievement;