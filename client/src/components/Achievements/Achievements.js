import React from 'react'
import Achievement from './Achievement/Achievement.js'
import {Grid, CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import useStyles from "./styles"

const Achievements = ({setCurrentId}) => {
    const achievements = useSelector((state) => {
        return state.achievements
    })
    const classes = useStyles();
    console.log("achievementss", achievements)
    return (
        !achievements.length ? <CircularProgress/>: (
            <Grid className = {classes.mainContainer} container alignItems="stretch" spacing={3}>
                {achievements.map((achievement) => { return(
                    <Grid key={achievement._id} item xs={12} sm={6}>
                        <Achievement achievement = {achievement} setCurrentId = {setCurrentId}/>
                    </Grid>
                )})}
            </Grid>
        )
    )
}

export default Achievements;