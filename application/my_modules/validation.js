import Validator from 'validatorjs'     // dependencia para validacao de dados

export default body => {
    const validator = new Validator(body, {
        'remetente' : 'required|email',
        'service' : 'required',
        'psw' : 'required|string|confirmed',
        'psw_confirmation' : 'required',
        'assunto' : 'required|string|min:3|max:78',
        'texto' : 'required|string',
        'destinatarios.*.endereco' : 'required|email',
        'destinatarios.*.date' : 'required'
    })

    validator.passes()  // validando dados
    
    if(Object.keys(validator.errors.all()).length !== 0) return { error: validator.errors.all() }

    return true
}