import React, { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto'
import { validarCPF, validarSenha, validarNome, validarSobrenome, validarCEP } from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container
        className='container'
        component='article'
        maxWidth='sm'
      >
        <Typography
          variant='h3'
          component='h1'
          align='center'
          className='titulo'
          >
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome, sobrenome: validarSobrenome, cep: validarCEP }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;