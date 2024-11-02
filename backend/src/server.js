require('dotenv').config();
const express = require('express');
const strainRoutes = require('./routes/strainRoutes.js')


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

//listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
});