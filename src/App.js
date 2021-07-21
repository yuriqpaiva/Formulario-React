import React, { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto'

class App extends Component {
  render() {
    return (
      <Container 
      component='article'
      maxWidth='sm'
      >
       <Typography variant='h3'component='h1' align='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro 
        aoEnviar={aoEnviarForm} 
        validarCPF={validarCPF} 
        validarNome={validarNome} 
        validarSobrenome={validarSobrenome}
        />
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarNome(nome) {
  if (nome.search(/^[-]?\d*\.?\d+(?:[Ee][-]?\d+)?$/) !== -1 && nome.length !== 0) {
    return {valido: false, texto: 'O Nome não deve conter números!'}
  } else {
    return {valido: true, texto: ''}
  }
}

function validarSobrenome(sobrenome) {
  if (sobrenome.search(/^[-]?\d*\.?\d+(?:[Ee][-]?\d+)?$/) !== -1 && sobrenome.length !== 0) {
    return {valido: false, texto: 'O Sobrenome não deve conter números!'}
  } else {
    return {valido: true, texto: ''}
  }
}

function validarCPF(cpf) {
  if (cpf.search(/^[-]?\d*\.?\d+(?:[Ee][-]?\d+)?$/) === -1 && cpf.length !== 0) {
    return {valido: false, texto: 'O CPF deve conter apenas números!'}
  } else if (cpf.length !== 11 && cpf.length !== 0 ) {
    return {valido: false, texto:"O CPF deve ter 11 dígitos"}
  } else {
    return {valido: true, texto: ''}
  }
}

export default App;