import React from 'react'
import { useData } from '../../hook/useData'
import SignatureInformations from './SignatureInformations';

const DocumentSignature = () => {
    const { data } = useData();

    const expertPerson = data?.expert ?? null;
    const analystPerson = data?.analyst ?? null;
    const unit = data?.unit ?? null ?? undefined;
    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full flex items-center justify-evenly pt-12">
                <SignatureInformations name={`${expertPerson?.firstName} ${expertPerson?.lastName}`} cpf={expertPerson?.cpf} typePerson="expert" signature={expertPerson?.signature} />
                <SignatureInformations name={`${analystPerson?.firstName} ${analystPerson?.lastName}`} cpf={analystPerson?.cpf} typePerson="analyst" signature={analystPerson?.signature} />
            </div>
            <div className="w-full flex flex-col items-center gap-1 mb-11">
                <div className="inline-flex">Unidade: <p className="pl-1">{unit?.name}</p></div>
                <div className="inline-flex">Telefone: <p className="pl-1">{unit?.phone}</p></div>
                <div className="inline-flex">E-mail: <p className="pl-1">{unit?.email}</p></div>
                <div className="inline-flex">CNPJ: <p className="pl-1">{unit?.cnpj}</p></div>
            </div>
        </div>
    )
}

export default DocumentSignature