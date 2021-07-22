import React, { useState, useContext } from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosPessoais({ aoEnviar, aoVoltar, dados }) {   // Destructuring do props
    const [nome, setNome] = useState(dados.nome)
    const [sobrenome, setSobrenome] = useState(dados.sobrenome)
    const [cpf, setCpf] = useState(dados.cpf)
    const [promocoes, setPromocoes] = useState(dados.promocoes)
    const [novidades, setNovidades] = useState(dados.novidades)
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
            }
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                    validarCampos(event)
                }}
                // onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id='nome'
                name='nome'
                label='Nome'
                type='text'
                required
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value)
                    validarCampos(event)
                }}
                // onBlur={validarCampos}
                error={!erros.sobrenome.valido}
                helperText={erros.sobrenome.texto}
                name='sobrenome'
                id='sobrenome'
                type='text'
                label='Sobrenome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    validarCampos(event)
                    let temp = event.target.value
                    if (temp.length >= 11) {
                        temp = temp.substring(0, 11)
                    }
                    setCpf(temp)
                }}
                // onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='CPF'
                label='CPF'
                name='cpf'
                required
                variant='outlined'
                fullWidth
                margin='normal'

            />

            <FormControlLabel
                label='Promoções'
                control={<Switch onChange={(event) => {
                    setPromocoes(event.target.checked)
                }} name='Promoções' checked={promocoes} color='primary' />}
            />

            <FormControlLabel
                label='Novidades'
                control={<Switch onChange={(event) => {
                    setNovidades(event.target.checked)
                }} name='Novidades' checked={novidades} color='primary' />}
                
                />

            <Button
                onClick={() => {
                    aoVoltar( { nome, sobrenome, cpf, novidades, promocoes } )
                }}
                variant="contained"
                color='secondary'
                fullWidth
            >Voltar
            </Button>

            <Button
                variant="contained"
                color='primary'
                type='submit'
                fullWidth
                
                >Próximo
                
            </Button>


        </form>
    )
}

export default DadosPessoais