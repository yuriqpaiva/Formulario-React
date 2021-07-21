import { TextField, Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';

function DadosUsuario({ aoEnviar }) {

    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({email, senha})
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                id='email'
                label='E-mail'
                type='email'
                required
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                id='senha'
                label='Senha'
                type='password'
                required
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <Button
                type='submit'
                variant="contained"
                color='primary'
            >
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario