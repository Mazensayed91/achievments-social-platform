import React, {useState} from 'react';
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import useStyles from './styles'
import FileBase from "react-file-base64"
import {useDispatch} from "react-redux";
import {createAchievement, updateAchievement} from "../../redux/actions/achievements";

const Form = ({ currentId, setCurrentId }) => {
    const [achievementData, setAchievementData] = useState({
        creator: '',
        title: '',
        message: '',
        tags:'',
        selectedField: ''
    })
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updateAchievement(currentId, achievementData))
        }
        else {
            dispatch(createAchievement(achievementData))
        }
    }

    const clear = () => {

    }

    const dispatch = useDispatch()

    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6"> Add another achievement!</Typography>
                    <TextField name="creator" varient="outlined" label="Creator" fullWidth value={achievementData.creator}
                    onChange={(e) => setAchievementData(
                        {
                                ...achievementData,
                                creator: e.target.value
                            })}
                    />
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