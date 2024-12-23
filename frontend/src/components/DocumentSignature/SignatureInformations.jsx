import React from 'react'

const SignatureInformations = ({ signature, name, cpf, typePerson }) => {
    return (
        <div className="w-full flex flex-col items-center gap-1">
            <div>{signature ? signature : <p className="font-semibold text-red-500">Assinatura não disponível</p>}</div>
            <div className="w-60 border-b-2 border-black mb-2" />
            <div className="inline-flex">Nome: <p className="pl-1">{name}</p></div>
            <div className="inline-flex">CPF: <p className="pl-1">{cpf ? cpf : 'Não informado'}</p></div>
            <p className="inline-flex">{typePerson === 'expert' ? 'Perito Automotivo' : typePerson === 'analyst' ? 'Analista Automotivo' : 'Não informado'}</p>
        </div>
    )
}

export default SignatureInformations