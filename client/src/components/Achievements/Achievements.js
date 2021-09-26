import React from 'react'
import Achievement from './Achievement/Achievement.js'
import {useSelector} from "react-redux";

const Achievements = () => {
    const achievements = useSelector((state) => {
        return state.achievements
    })
    console.log("achievementss", achievements)
    return (
        <>
            <Achievement />
            <Achievement />
            <Achievement />
        </>
    )
}

export default Achievements;