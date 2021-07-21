import React, { useState } from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';

function DadosPessoais({aoEnviar, validarCPF, validarSobrenome, validarNome}) {   // Destructuring do props
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const [erros, setErros]  = useState({
        cpf: {valido: true, texto: ''},
        nome: {valido: true, texto: ''},
        sobrenome: {valido: true, texto: ''}
    })

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)

                }}
                onBlur={() => {
                    const ehValido= validarNome(nome)
                    setErros({...erros, nome: ehValido})
                }}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id='nome'
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
                onBlur={() => {
                    const ehValido = validarSobrenome(sobrenome)
                    setErros({...erros, sobrenome: ehValido})
                }}
                error={!erros.sobrenome.valido}
                helperText={erros.sobrenome.texto}
                id='sobrenome'
                label='Sobrenome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={(event) => {       
                    let temp  = event.target.value
                    if (temp.length >= 11)  {
                        temp = temp.substring(0, 11)
                    }
                    setCpf(temp)
                }}
                onBlur={() => {
                    const ehValido = validarCPF(cpf)
                    setErros({...erros, cpf: ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='CPF'
                label='CPF'
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
                type='submit'>Cadastrar
            </Button>
        </form>
    )
}

export default DadosPessoais