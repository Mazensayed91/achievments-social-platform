import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import useStyles from './styles';
import {Link} from "react-router-dom";


const Navbar = () => {
    const classes = useStyles()
    const user = null;

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} className={classes.heading} variant="h2" align="center">Achievements</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div>
                            User
                        </div>
                    ) : (
                        <div>
                            Login
                        </div>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
