const mongoose = require('mongoose');

const SchemaBroma = new mongoose.Schema({
    setup:{type:String, required:[true,"El setup es obligatorio."], minlength:[10,"El setup debe tener como mínimo 10 caracteres"]},
    punchline:{type:String, required:[true,"La punchline es obligatorio."], minlength:[3,"La pubchline debe tener como mínimo 3 caracteres"]}
},{timestamps:true});

const Broma = mongoose.model("bromas",SchemaBroma);

module.exports = Broma;