const Strain = require('../models/strainModel.js')
const mongoose = require('mongoose')
//get all strain
const getStrains = async (req, res) => {
    const strains = await Strain.find({}).sort({createdAt: -1})

    res.status(200).json(strains)
}

//get single strain
const getStrain = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such strain'})
    }

    const strain = await Strain.findById(id)

    if (!strain){
        return res.status(404).json({error: 'no such strain'}) 
    }

    res.status(200).json(strain)
}

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

    
}

//delete a strain
const deleteStrain = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such strain'})
    }
    const strain = await Strain.findOneAndDelete({_id: id})

    if (!strain){
        return res.status(404).json({error: 'no such strain'}) 
    }

    res.status(200).json(strain)

}

//update a strain
const updateStrain = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such strain'})
    }
    const strain = await Strain.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!strain){
        return res.status(404).json({error: 'no such strain'}) 
    }

    res.status(200).json(strain)

}

module.exports={
    createStrain,
    getStrain,
    getStrains,
    deleteStrain,
    updateStrain
}