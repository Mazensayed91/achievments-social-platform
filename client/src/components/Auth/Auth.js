import React, {useState} from "react";
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";
import{ GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input"
import useStyles from './styles'

const Auth = () => {

    const classes = useStyles()
    const [isSignup, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    const handleShowPassword = () => {
        return setShowPassword(prevShowPassword => !prevShowPassword)
    }

    const switchMode = () => {
        setIsSignUp(signUp => !signUp)
        handleShowPassword(false)
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
                    <GoogleLogin
                        clientId="GOOGLE ID"
                        render = {(renderProps) => (
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>Google Sign in</Button>
                        )}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {
                            isSignup ? "Sign Up": "Sign In"
                        }
                    </Button>
                    <Grid container justify="flex-end">
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