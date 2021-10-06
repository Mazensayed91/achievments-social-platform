import React from 'react';
import moment from 'moment';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles"
import {useDispatch} from "react-redux";
import {deleteAchievement, likeAchievement} from "../../../redux/actions/achievements";

const Achievement = ({ achievement, setCurrentId }) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const deleteAch = () => {
        dispatch(deleteAchievement(achievement._id))
    }
    const like = () => {
        dispatch(likeAchievement(achievement._id))
    }
    const classes = useStyles()

    const Likes = () => {

        if(achievement.likes.length > 0){
            return achievement.likes.find((like) => like === user?.result?.googleId || user?.result?._id) ? <><ThumbDownAltIcon fontSize="small" /> {achievement.likes.length} </>
                :<><ThumbUpAltIcon fontSize="small" />  {achievement.likes.length}</>
        }
        else {
            return <><ThumbUpAltIcon fontSize="small"/> </>
        }
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={achievement.selectedFile} title={achievement.title}/>
            <div className={classes.overlay}>
                <Typography varient="h6">
                    {achievement.name}
                </Typography>
                <Typography varient="h6">
                    {moment(achievement.createdAt).fromNow()}
                </Typography>
            </div>
            {(user.result?.googleId === achievement?.creator || user?.result?._id === achievement?.creator) &&
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => {setCurrentId(achievement._id)}}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            }
            <div>
                <Typography varient="body2" color="textSecondary">{achievement.tags ? achievement?.tags.map((tag) => `#${tag}`) : ""}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5">
                    {achievement.message}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" disabled={!user?.result} onClick={like}>
                    <Likes/>

                </Button>
                {(user.result?.googleId === achievement?.creator || user?.result?._id === achievement?.creator) &&
                <Button size="small" color="primary" onClick={deleteAch}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
                }
            </CardActions>
        </Card>
    );
};

export default Achievement;