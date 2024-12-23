import React from 'react'
import { useData } from '../../hook/useData';

const Logo = () => {
  const { fullColors } = useData();
  return (
    <div className="flex items-center justify-center gap-2 h-20">
      <h1 className="font-extrabold text-[60px]" style={{ color: fullColors.primaryColor }}>sisv</h1>
      <div className="max-h-fit h-20 w-2 bg-yellow-500" />
      <div className="text-left max-w-24 break-after-left" style={{ color: fullColors.primaryColor }}>
        Sistema de Indentificação e Segurança Veicular
      </div>
    </div>
  )
}

export default Logo