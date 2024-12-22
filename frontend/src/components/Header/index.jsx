import React from 'react';
import logo from '../../../public/image/logo.png';
import { useData } from '../../hook/useData';

const Header = ({ qrCode }) => {
  const { data, fullColors } = useData();

  const [datePart, timePart] = data?.createDate?.split(' ') || [];

  const formattedDate = new Date(datePart)?.toLocaleDateString('pt-BR');
  const formattedTime = timePart?.substring(0, 5);
  return (
    <div className='flex items-center justify-between'>
       <img className="w-[20rem] h-32" src={logo} alt="logo" />
       {qrCode || <div className="qr-code"></div>}
       <div className="flex items-center flex-col line-clamp-5 gap-3">
        <p className="strong">ID: {data?.id}</p>
        <div className={`py-4 px-16 bg-[${data?.approvalStatus?.color}]`}>
          {data?.approvalStatus?.name}
        </div>
        <div className="">{formattedDate} {formattedTime}</div>
       </div>
    </div>
  )
}

export default Header