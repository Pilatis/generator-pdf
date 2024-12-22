import React from 'react';
import logo from '../../assets/image/logo.png';
import { useData } from '../../hook/useData';

const Header = ({ qrCode }) => {
  const { data, fullColors } = useData();

  const [datePart, timePart] = data?.createDate?.split(' ') || [];

  const formattedDate = new Date(datePart)?.toLocaleDateString('pt-BR');
  const formattedTime = timePart?.substring(0, 5);
  return (
    <div className='w-full flex items-center justify-between'>
      <img className="w-[22rem] h-32" src={logo} alt="logo" />
      {qrCode || <div className="qr-code"></div>}
      <div className="flex items-center flex-col line-clamp-5 gap-3">
        <p className="font-semibold">ID: {data?.id}</p>
        {data?.approvalStatus?.name && data?.approvalStatus?.color && (
          <div className={`flex items-center text-lg text-white font-semibold py-2 px-16`} style={{ background: data?.approvalStatus?.color }}>
            {data?.approvalStatus?.name}
          </div>
        )}
        <div className="font-semibold">{formattedDate} {formattedTime}</div>
      </div>
    </div>
  )
}

export default Header