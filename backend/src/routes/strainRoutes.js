const express = require('express');

const router = express.Router();

//get all strain
router.get('/', (req,res) => {
    res.json({mssg: 'get all strain'});
});

//get a single strain
router.get('/:id', (req,res) => {
    res.json({mssg: 'get a sigle strain'});
});

//post a new strain
router.post('/',(req,res)=>{
    res.json({mssg: 'post a new strain'})
})

//delete a strain
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'delete a strain'})
})

//update a strain
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'update a new strain'})
})

module.exports = router;