import mongoose from "mongoose";
var AgenceSchema = mongoose.Schema({
    horaire: String,
    adresse: String,
    telephone: String,
    logo:String
});
const Agence = mongoose.model("Agence", AgenceSchema);
export default Agence;
