const express = require('express');
const {
    createStrain,
    getStrain,
    getStrains,
    deleteStrain,
    updateStrain 
    
} = require('../controllers/strainController.js')


const router = express.Router();

//get all strain
router.get('/', getStrains);

//get a single strain
router.get('/:id', getStrain);

//post a new strain
router.post('/', createStrain)

//delete a strain
router.delete('/:id',deleteStrain)

//update a strain
router.patch('/:id',(updateStrain))

module.exports = router;