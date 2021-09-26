import React from 'react'
import {getAchievements} from './redux/actions/achievements.js'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Achievements from "./components/Achievements/Achievements";
import Form from "./components/Form/Form";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAchievements());
    }, [dispatch])
    return (
        <div>
            <Achievements/>
            <h1>React setup finally</h1>
            <Form/>
        </div>
    )
}

export default App;