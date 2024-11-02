require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');

const strainRoutes = require('./routes/strainRoutes.js');
const { configDotenv } = require('dotenv');


//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/Strains',strainRoutes);

//connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        
        //listen for request
        app.listen(process.env.PORT, () => {

            console.log('Listening on port', process.env.PORT);

        });
    })
    .catch((error)=>{

        console.log(error);
    })

