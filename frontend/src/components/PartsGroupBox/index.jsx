import React, { Fragment } from 'react'
import VehicleBox from './VehicleBox'
import { useData } from '../../hook/useData'

const PartsGroupBox = ({ group }) => {
  const { fullColors } = useData();
  return (
    <div className="w-full flex grid-cols-3 col-span-3 gap-4 py-5">
      {Array.isArray(group.data) ? group?.data.map((part) => (
        <div key={part.id} className="w-full flex mb-2">
          {console.log(part.name)}
          <VehicleBox name={part?.name} image={part?.s3File?.url} headerColor={fullColors.primaryColor || ''} lineColor="#2bd247"  />
        </div>
      )) : (
        <VehicleBox name={group.data.name} />
      )}
    </div>
  )
}

export default PartsGroupBox