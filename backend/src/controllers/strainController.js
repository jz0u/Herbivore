const Strain = require('../models/strainModel.js')

//get all strain
const getStrains = async (req, res) => {
    const strains = await Strain.find({}).sort({createdAt: -1})

    res.status(200).json(strains)
}

//get single strain


//create new strain
const createStrain = async (req, res) => {
    const {id,name,type,thc,cbd,effects} = req.body

    //add doc to db
    try {
        const strain = await Strain.create({id,name,type,thc,cbd,effects})
        res.status(200).json(strain)
        
    } catch(error){
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'post a new strain'})
}

//delete a strain


//update a strain


module.exports={
    createStrain
}