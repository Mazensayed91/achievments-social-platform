import {Container, Grid, Grow} from "@material-ui/core";
import Achievements from "../Achievements/Achievements";
import Form from "../Form/Form";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getAchievements} from "../../redux/actions/achievements";


const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAchievements());
    }, [currentId, dispatch])
    return (
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
    )
}

export default Home;