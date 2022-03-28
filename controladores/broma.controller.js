const Broma = require('./../modelos/broma.model');


const agregarBroma = (request,response) =>{
    const {setup,punchline} = request.body;
    console.log(setup,punchline)
    if(setup &&punchline){
        const nuevaBroma = {
            setup,punchline
        };

        Broma.create(nuevaBroma)
            .then(bromaCreada =>{
                return response.status(201).json(bromaCreada);
            })
            .catch(err =>{
                response.statusMessage = "Hubo un error al intentar agregar la broma. "+err;
                return response.status(400).end();
            })
    }
    else{
        response.statusMessage = "Para crear una nueva Broma es necesario mandar el setup y el punchline. ";
        return response.status(406).end();
    }
}

const obtenerBromas = (request,response) =>{
    Broma.find()
        .then( listaBromas =>{
            return response.status(200).json(listaBromas);
        })
        .catch( err =>{
            response.statusMessage ="Hubo un error al tratar de obtener las bromas. "+err;
            return response.status(400).end();
        })

}

const obtenerBromaRandom = (request,response) =>{
    Broma.find()
        .then( listaBromas =>{
            let random = Math.floor(Math.random()*listaBromas.length);
            return response.status(200).json(listaBromas[random]);
        })
        .catch(err =>{
            response.statusMessage="Hubo un error al intentar obtener una broma de forma aleatoria. "+err;
            return response.status(400).end();
        });
}

const obtenerBromaPorId = (request,response) =>{
    const _id = request.params.id;
    console.log(_id);
    if(!_id){
        response.statusMessage = "Es necesario proporcionar el Id.";
        return response.status(406).end();
    }
    Broma.findById({_id})
        .then(bromaObtenida =>{
            return response.status(200).json(bromaObtenida);
        })
        .catch(err => {
            response.statusMessage="Hubo un error al intentar obtener la broma. "+err;
            return response.status(400).end();
        });
}

const updateBromaPorId = (request,response) => {
    const {setup,punchline} = request.body;
    const _id = request.params.id;
    const bromaActualizada = {
        setup,punchline
    }
    Broma.findByIdAndUpdate({_id},{$set: bromaActualizada},{new:true})
        .then((datoBroma)=>{
            return response.status(202).json(datoBroma);
        })
        .catch(err =>{
            response.statusMessage = "Hubo un error al ejecutar el update. "+err;
            return response.status(400).end();
        })
}

const deleteBroma = (request,response) =>{
    const _id = request.params.id;
    Broma.deleteOne({_id})
        .then( ()=> {
            return response.status(204).end();
        })
        .catch(err =>{
            response.statusMessage="Hubo un error al ejecutar el delete. "+err;
            return response.status(400).end();
        });
}

const ControladorBroma = {
    agregarBroma,
    obtenerBromaPorId,
    obtenerBromas,
    obtenerBromaRandom,
    updateBromaPorId,
    deleteBroma
}

module.exports = ControladorBroma;