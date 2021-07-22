function validarCPF(cpf) {
  if (cpf.search(/^[-]?\d*\.?\d+(?:[Ee][-]?\d+)?$/) === -1 && cpf.length !== 0) {
    return { valido: false, texto: 'O CPF deve conter apenas números!' }
  } else if (cpf.length !== 11 && cpf.length !== 0) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos" }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarSenha(senha) {
  if ((senha.length < 4 && senha.length !== 0) || senha.length > 72) {
    return { valido: false, texto: 'Senha deve ter entre 4 e 72 dígitos' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarNome(nome) {
  if (nome.search(/^[-]?\d*\.?\d+(?:[Ee][-]?\d+)?$/) !== -1 && nome.length !== 0) {
    return { valido: false, texto: 'O Nome deve conter apenas letras!' }
  }
  else if ((nome.length < 3 && nome.length !== 0) || nome.length > 72) {
    return { valido: false, texto: 'Nome deve ter entre 3 e 72 dígitos' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarSobrenome(sobrenome) {
  if (sobrenome.search(/^[-]?\d*\.?\d+(?:[Ee][-]?\d+)?$/) !== -1 && sobrenome.length !== 0) {
    return { valido: false, texto: 'O Sobrenome deve conter apenas letras!' }
  }
  else if ((sobrenome.length < 3 && sobrenome.length !== 0) || sobrenome.length > 72) {
    return { valido: false, texto: 'Nome deve ter entre 3 e 72 dígitos' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarCEP(cep) {
  if (cep.search(/^[-]?\d*\.?\d+(?:[Ee][-]?\d+)?$/) === -1 && cep.length !== 0) {
    return { valido: false, texto: 'CEP deve conter apenas números!' }
  } else if (cep.length !== 8 && cep.length !== 0) {
    return { valido: false, texto: "CEP deve ter 8 dígitos" }
  } else {
    return { valido: true, texto: '' }
  }
}


export { validarCPF, validarSenha, validarNome, validarSobrenome,validarCEP }