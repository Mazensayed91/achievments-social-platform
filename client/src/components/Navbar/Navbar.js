import {AppBar, Avatar, Button, Toolbar, Typography} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import useStyles from './styles';
import {Link, useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/auth";

const Navbar = () => {
    const classes = useStyles()
    const history = useHistory()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const handleLogout = () => {

        try{
            dispatch(logout())
            history.push("/")
            setUser(null)
        }catch (e) {
            console.log("logout error", e)
        }
    }

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to = "/" className={classes.heading} variant="h2" align="center">Achievements</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>{user?.result?.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user?.result?.name}</Typography>
                            <Button variant="contained"  className={classes.logout} color='secondary' onClick={handleLogout}>Logout</Button>

                        </div>
                    ) : (
                        <div>
                            <Button variant="contained" component={Link} to ="/auth" color='primary'>Sign in</Button>
                        </div>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
