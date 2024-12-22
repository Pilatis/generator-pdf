import React from 'react'
import { useData } from '../../hook/useData'

const MainInformation = () => {
  const { data, fullColors } = useData();

  const unit = data?.unit;

  return (
    <div className="w-full flex items-center flex-col gap-4">
      <div className="w-full flex items-left p-2 text-lg font-semibold text-black" style={{ background: fullColors.secondColor }}>
        Informações:
      </div>
      <div className="w-full flex items-center justify-between">
         <div className="flex flex-col gap-3">
           <p className="text-lg font-semibold">Unidade: <strong className="uppercase">{unit?.name ? unit?.name : 'NÃO INFORMADA'}</strong></p>
           <p className="text-lg font-semibold uppercase">veicular ltda.</p>
         </div>
         <div className="flex flex-col gap-3">
           <p className="font-semibold">Cliente: <strong className="uppercase">{data?.client ? data?.cliente : 'NÃO INFORMADA'}</strong></p>
           <p className="text-lg font-semibold">Vistoriador: <strong className="uppercase">{data?.expert ? data?.expert.firstName : 'NÃO INFORMADA'}</strong></p>
         </div>
      </div>
    </div>
  )
}

export default MainInformation