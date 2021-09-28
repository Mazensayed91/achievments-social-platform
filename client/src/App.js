import React from 'react'
import {getAchievements} from './redux/actions/achievements.js'
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import Achievements from "./components/Achievements/Achievements";
import Form from "./components/Form/Form";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAchievements());
    }, [currentId, dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Achievements</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Achievements setCurrentId = {setCurrentId} currentId = {currentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;