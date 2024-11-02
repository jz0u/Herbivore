const express = require('express');

//express app
const app = express();

//routes
app.get('/', (req,res)=>{
    res.json({msg: 'welcome to the app'});
});

//listen for request
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});