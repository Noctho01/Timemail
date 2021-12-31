const Validator = require('validatorjs')

function validationBody (body) {
    const rules = {
        'remetente' : 'required',
        'pass_remetente' : 'required',
        'assunto' : 'required',
        'texto' : 'required',
        'detalhes.*.endereco' : 'required',
        'detalhes.*.time' : 'required'
    }
    const validator = new Validator(body, rules)
    
    /*
    
    const errors = {}

    // VALIDANDO EXISTENCIA DE DADOS
        if(!body.remetente) errors.remetente = "Este campo deve ser informado"
        if(!body.pass_remetente) errors.pass_remetente = "Este campo deve ser informado"
        if(!body.assunto) errors.assunto = "Este campo deve ser informado"
        if(!body.texto) errors.texto = "Este campo deve ser informado"
        if(!body.destinatarios) errors.destinatarios = "Este campo deve ser informado"
        
        if(Object.keys(errors).length !== 0) return { error: errors }

    // VALIDANDO REMETENTE  
    */

    return validator.passes()
}

module.exports = validationBody