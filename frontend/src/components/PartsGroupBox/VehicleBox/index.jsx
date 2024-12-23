import React from 'react'

const VehicleBox = ({ headerColor, lineColor, name, image }) => {
  return (
    <div className="w-full max-w-[20rem] flex flex-col">
      <div className="flex p-2 text-white font-semibold" style={{ background: headerColor }}>
        {name}
      </div>
      <div className="border-b-2" style={{ borderColor: lineColor }} />
      <img className="border-1 shadow-md border-black w-auto h-auto min-h-40 min-w-[20rem] object-fill" src={image || 'https://via.placeholder.com/450'} alt={name} />
    </div>
  )
}

export default VehicleBox