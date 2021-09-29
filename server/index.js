// Imports
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import achievementsRoutes from './routes/achievements.js'

// Start up an instance of app
const PORT = process.env.PORT || 5000 // heroku will initiate PORT env variable later
const app = express();
dotenv.config()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(bodyParser.json({limit: "30mb", extended: true}));

// Cors for cross origin allowance and security
app.use(cors());

// Routes
app.use('/achievements', achievementsRoutes)

// Initialize the main project folder
app.use(express.static('website'));

// MongoDB setup

const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>  {
        console.log("Server running!");
    }))
    .catch((error) => console.log(error.message, "erorrrrorror"))

