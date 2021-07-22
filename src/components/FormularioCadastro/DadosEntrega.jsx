import { TextField, Button } from '@material-ui/core'
import React from 'react'
import { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosEntrega({ aoEnviar, aoVoltar, dados }) {

    const [cep, setCep] = useState(dados.cep)
    const [endereco, setEndereco] = useState(dados.endereco)
    const [numero, setNumero] = useState(dados.numero)
    const [estado, setEstado] = useState(dados.estado)
    const [cidade, setCidade] = useState(dados.cidade)
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (possoEnviar()) {
                aoEnviar({ cep, endereco, numero, estado, cidade })
            }
        }}>
            <TextField
                value={cep}
                onChange={(event) => {
                    let temp = event.target.value
                    if (temp.length >= 8) {
                        temp = temp.substring(0, 8)
                    }
                    setCep(temp)
                    validarCampos(event)
                }}
                id='cep'
                label='CEP'
                name='cep'
                error={!erros.cep.valido}
                helperText={erros.cep.texto}
                required
                type='text'
                variant='outlined'
                margin='normal'
            />

            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value)
                }}
                id='endereco'
                label='Endereço'
                type='text'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
                id='numero'
                label='Número'
                type='number'
                variant='outlined'
                margin='normal'
            />

            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
                id='Estado'
                label='Estado'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <TextField
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
                id='Cidade'
                label='Cidade'
                type='text'
                variant='outlined'
                margin='normal'
            />
            <Button
                onClick={() => {
                    aoVoltar({ cep, endereco, numero, estado, cidade })
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
            >Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega