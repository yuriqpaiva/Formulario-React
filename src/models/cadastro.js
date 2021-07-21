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
    if ((senha.length < 4 && senha.length !==0) || senha.length > 72 ) {
        return { valido: false, texto: 'Senha deve ter entre 4 e 72 dígitos' }
    } else {
        return { valido: true, texto: '' }
    }
}

function validarNome(nome) {
  if ((nome.length < 4 && nome.length !==0) || nome.length > 72) {
    return { valido: false, texto: 'Senha deve ter entre 4 e 72 dígitos' }
} else {
      return {valido: true, texto: ''}
    }
  }
  
  function validarSobrenome(sobrenome) {
    if ((sobrenome.length < 4 && sobrenome.length !==0) || sobrenome.length > 72) {
      return { valido: false, texto: 'Senha deve ter entre 4 e 72 dígitos' }
  } else {
      return {valido: true, texto: ''}
    }
  }

export { validarCPF, validarSenha, validarNome, validarSobrenome }