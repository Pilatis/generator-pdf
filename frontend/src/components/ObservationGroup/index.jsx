import React from 'react'
import { useData } from '../../hook/useData'

const ObservationGroup = ({ group }) => {
  const { fullColors } = useData();
  return (
    <div className="w-full flex flex-col border-2" style={{ borderColor: fullColors.secondColor }}>
      <div className='flex items-start p-2 font-semibold' style={{ color: fullColors.primaryFontColor, background: fullColors.secondColor }}>
        Observações
      </div>
      <div className="p-2 min-h-40">
        <p className="font-semibold">{group?.data?.textObservation || 'Sem observações'}</p>
      </div>
    </div>
  )
}

export default ObservationGroup