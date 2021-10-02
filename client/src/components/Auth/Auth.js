import React, {useState} from "react";
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";
import{ GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input"
import Icon from "./icon"
import useStyles from './styles'
import {useDispatch} from "react-redux";
import {googleAuth, signUp, signIn} from "../../redux/actions/auth";
import { useHistory } from "react-router-dom"


const Auth = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [isSignup, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("formData", formData);
        if(isSignup){
            dispatch(signUp(formData, history))
        }
        else{
            dispatch(signIn(formData, history))
        }
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleShowPassword = () => {
        return setShowPassword(prevShowPassword => !prevShowPassword)
    }

    const switchMode = () => {
        setIsSignUp(signUp => !signUp)
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        console.log("res", res)

        const result = res?.profileObj;
        const token = res?.tokenId;

        try{
            dispatch(googleAuth(result, token))
            history.push("/")
        }catch(e){
            console.log("googleSuccess Error", e)
        }
    }

    const googleFailure = () => {
        console.log("Error Happened")
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">Sign In</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half/>
                                </>
                            )
                        }
                        <Input name='email' label="Email Address" handleChange={handleChange} type='email'/>
                        <Input name='password' label="Password" handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
                        {
                            isSignup && (
                                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" autoFocus/>
                            )
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {
                            isSignup ? "Sign Up": "Sign In"
                        }
                    </Button>
                    <GoogleLogin
                        clientId="866897726322-5jhdp8gv99esl8h9a2l8otgeulp204k5.apps.googleusercontent.com"
                        render = {(renderProps) => (
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>Google Sign in</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}

                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In': "Don't Have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;