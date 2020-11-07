const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VoitureSchema = new Schema({
    title: { type: String, unique: true, maxlength:256 },
    couleur: { type: String },
    marque: { type: String },
    vitesse :{type : Number}
}, { timestamps: true })

module.exports = mongoose.model('Voiture', VoitureSchema)