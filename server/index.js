// Imports
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import achievementsRoutes from './routes/achievements.js'

// Start up an instance of app
const PORT = process.env.PORT || 5000 // heroku will initiate PORT env variable later
const app = express();

// Routes
app.use('/achievements', achievementsRoutes)

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(bodyParser.json({limit: "30mb", extended: true}));

// Cors for cross origin allowance and security
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// MongoDB setup

const CONNECTION_URL = 'mongodb://mazenelmern:mazenelmern@cluster0-shard-00-00.lfhtr.mongodb.net:27017,cluster0-shard-00-01.lfhtr.mongodb.net:27017,cluster0-shard-00-02.lfhtr.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ka4vz2-shard-0&authSource=admin&retryWrites=true&w=majority'
console.log(PORT)
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>  {
        console.log("Server running!");
    }))
    .catch((error) => console.log(error.message, "erorrrrorror"))

