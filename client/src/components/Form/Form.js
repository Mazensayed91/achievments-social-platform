import React, {useEffect, useState} from 'react';
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import useStyles from './styles'
import FileBase from "react-file-base64"
import {useDispatch, useSelector} from "react-redux";
import {createAchievement, getAchievements, updateAchievement} from "../../redux/actions/achievements";

const Form = ({ currentId, setCurrentId }) => {

    const [achievementData, setAchievementData] = useState({
        title: '',
        message: '',
        tags:'',
        selectedField: ''
    })
    const achievement = useSelector((state) => currentId ? state.achievements.find((a) => a._id === currentId): null)
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        if(achievement) setAchievementData(achievement)
    }, [achievement])
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updateAchievement(currentId, { ...achievementData, name: user?.result?.name }))
            dispatch(getAchievements());
        }
        else {
            dispatch(createAchievement({ ...achievementData, name: user?.result?.name }))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(0);
        setAchievementData({
            title: '',
            message: '',
            tags:'',
            selectedField: ''
        })
    }


    if(! user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your achievements and interact with others!
                </Typography>
            </Paper>
        )
    }

    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6"> {currentId ? "Edit" : "Add "} Achievement!</Typography>
                    <TextField name="title" varient="outlined" label="Title" fullWidth value={achievementData.title}
                               onChange={(e) => setAchievementData(
                                   {
                                       ...achievementData,
                                       title: e.target.value
                                   })}
                    />
                    <TextField name="message" varient="outlined" label="Message" fullWidth value={achievementData.message}
                               onChange={(e) => setAchievementData(
                                   {
                                       ...achievementData,
                                       message: e.target.value
                                   })}
                    />
                    <TextField name="tags" varient="outlined" label="Tags" fullWidth value={achievementData.tags}
                               onChange={(e) => setAchievementData(
                                   {
                                       ...achievementData,
                                       tags: e.target.value
                                   })}
                    />
                    <div>
                        <FileBase type="file" multiple={false}
                            onDone={({base64}) => setAchievementData({...achievementData, selectedFile: base64})}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </>
    );
};

export default Form;