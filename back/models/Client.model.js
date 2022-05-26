import mongoose from "mongoose"
var ClientSchema = mongoose.Schema({ 
    nom:String,
    prenom:String,
    civilité:String,
    datenais:String,
    nature_de_client:String,
    adresse:String,
    telephone:String,
    email:String,
    Photo:String,
    Agence: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Agence'
    }, 
    
}) 
const Client = mongoose.model('Client', ClientSchema); 
export default Client