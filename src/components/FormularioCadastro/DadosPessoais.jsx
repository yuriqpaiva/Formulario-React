import React, { useState, useContext } from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {   // Destructuring do props
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
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
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id='nome'
                name='nome'
                label='Nome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.sobrenome.valido}
                helperText={erros.sobrenome.texto}
                name='sobrenome'
                id='sobrenome'
                label='Sobrenome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    let temp = event.target.value
                    if (temp.length >= 11) {
                        temp = temp.substring(0, 11)
                    }
                    setCpf(temp)
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='CPF'
                label='CPF'
                name='cpf'
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
                }} name='Novidades' checked={novidades} color='primary' />} />

            <Button
                variant="contained"
                color='primary'
                type='submit'>Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais