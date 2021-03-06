import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from "../models/userModel.js";


export const signIn = async (req, res) => {

    const { email, password } = req.body;

    try{
        const existingUser = await User.findOne( {email} )

        if(!existingUser) return res.status(404).json({message: "User doesn't exist"})

        const passwordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!passwordCorrect) return res.status(400).json({message: "Incorrect password"})

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test", {expiresIn: "1h"})
        console.log("email and id", {email: existingUser.email, id: existingUser._id})
        res.status(200).json({ result: existingUser, token })

    }
    catch(error){
        console.log("error", error)
        res.status(500).json({message: error.message})
    }

}

export const signUp = async (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    try{
        const existingUser = await User.findOne( {email} )

        if(existingUser) return res.status(400).json({message: "User already exists"})

        if(password !== confirmPassword) return res.status(400).json({message: "Passwords should match"})

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({
            email,
            password: hashedPassword,
            name: firstName + " " + lastName
        })

        const token = jwt.sign({email: result.email, id: result._id}, "test", {expiresIn: "1h"})
        res.status(200).json({ result, token })

    }
    catch(error){
        console.log("error", error)
        res.status(500).json({message: error.message})
    }

}