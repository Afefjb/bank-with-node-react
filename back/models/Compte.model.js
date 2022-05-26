import mongoose from "mongoose"
var CompteSchema = mongoose.Schema({ 
    numero_de_compte:String,
    solde:String,
    type:String,
    Agence: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Agence'
    }, 
    Client: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Client'
    },
    
}) 
const Compte = mongoose.model('Compte', CompteSchema); 
export default Compte