import React, { Fragment, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCPF, validarNome, validarSobrenome }) {
    const [etapaAtual, setEtapaAtual] = useState(0)

    const formulario = [<DadosUsuario aoEnviar={proximo} />,
                        <DadosPessoais 
                        aoEnviar={proximo}
                        validarCPF={validarCPF}
                        validarNome={validarNome}
                        validarSobrenome={validarSobrenome}
                        />,
                        <DadosEntrega aoEnviar={proximo} />,
                        <h2>Formulario submetido</h2>
    ];

    function proximo(dados) {
        setEtapaAtual(etapaAtual + 1)
        
    }

    return (
        <Fragment>

            {formulario[etapaAtual]}

        </Fragment>
    )
}

// O switch não é suportado pelo JSX (dentro do return do componente)
// Para isso, criamos uma função fora do componente



export default FormularioCadastro