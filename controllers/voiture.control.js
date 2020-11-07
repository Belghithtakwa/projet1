const Voiture =require ('../models/voiture.models')

const getVoitures = async (req , res)=>{
    try {
        const voitures =await Voiture.find();
        return res.status(200).json(voitures)
    } catch (err) {
        return res.status(500).json(err);
    }
}

const getVoiture = async(req,res)=>{
    const id = req.params.VoitureId
    try {
       
        const voiture = await Voiture.findById(id);
        return res.status(200).json(voiture)
    } catch (err) {
        return res.status(500).json(err);
        
    }
}
const creatVoiture = async(req, res)=>{
    const newVoiture = new Voiture({
        title:req.body.title,
        couleur:req.body.couleur,
        marque:req.body.marque,
        vitesse:req.body.vitess
    })
     try {
        const creatVoit = await newVoiture.save()
        return res.status(200).json(creatVoit)
    } catch (err) {
        return res.status(500).json(err);
        
    }
}

const updateVoiture = async(req,res)=>{
    const id = req.params.VoitureId 
    const data = req.body
    const { ...dataToUpdate } = data
    try {
        const updatedVoiture = await Voiture.findByIdAndUpdate(id, dataToUpdate, { new: true })
        return res.status(200).json(updatedVoiture)
    } catch (err) {
        return res.status(500).json(err)
    }

}

const deleteVoiture = async(req,res)=>{
    const id = req.params.VoitureId
    try {
        const deletedVoiture = await Voiture.findByIdAndDelete(id)
        return res.status(200).json(deletedVoiture)
    } catch (err) {
        return res.status(500).json(err)
        
    }
}
module.exports.getVoiture= getVoiture
module.exports.getVoitures= getVoitures
module.exports.creatVoiture= creatVoiture
module.exports.updateVoiture= updateVoiture
module.exports.deleteVoiture= deleteVoiture