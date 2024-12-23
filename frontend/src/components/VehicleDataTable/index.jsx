import React, { Fragment } from 'react'
import { useData } from '../../hook/useData';

const VehicleDataTable = ({ group }) => {
    const { fullColors } = useData();

    const translationsVehicleData = {
        licensePlate: 'Placa',
        brandMode: 'Modelo',
        yearManufactureModel: 'Ano',
        color: 'Cor',
        chassis: 'Chassi',
        engineNumber: 'Motor',
        stateCity: 'UF/Município',
        fuelType: 'Combustível',
        power: 'Potência',
        transmission: 'Câmbio',
        mileage: 'KM',
        grvLot: 'GRV/Lote'
    };

    const itemsToRenderColumns = {
        firstColumn: [
            'licensePlate',
            'chassis',
            'engineNumber',
            'color',
            'fuelType',
            'transmission',
            'mileage',
            'grvLot'
        ],
        secondColumn: [
            'licensePlate',
            'chassis',
            'engineNumber',
            'color',
            'fuelType',
            'transmission',
            'yearManufactureModel',
            'stateCity'
        ]
    }

    return (
        <div className="w-full flex items-center justify-between py-5 gap-5">
            <div className="w-full flex flex-col">
                <div className="flex items-start p-2 text-white font-semibold" style={{ background: fullColors.primaryColor }}>
                    Dados do veículo:
                </div>
                {itemsToRenderColumns.firstColumn.map((item, index) => (
                    <Fragment key={index}>
                        <p className="inline-flex mt-1 font-semibold ml-2">
                            {translationsVehicleData[item]}:
                            <p className="uppercase pl-1">{group.data[item] || 'não informado'}</p>
                        </p>
                        <div className="w-full border-b-[1.9px] border-purple-400" />
                    </Fragment>
                ))}
            </div>

            <div className="w-full flex flex-col">
                <div className="flex items-start p-2 text-white font-semibold" style={{ background: fullColors.primaryColor }}>
                    Dados cadastrais
                </div>
                {itemsToRenderColumns.secondColumn.map((item, index) => {
                    if (item === 'stateCity') {
                        const state = group.data.state || 'não informado';
                        const city = group.data.state || 'não informado';

                        return (
                            <Fragment key={index}>
                            <p className="inline-flex mt-1 font-semibold ml-2">
                                {translationsVehicleData[item]}:
                                <p className="uppercase pl-1">{state} / {city}</p>
                            </p>
                             <div className="w-full border-b-[1.9px] border-purple-400" />
                            </Fragment>
                        )
                    }
                    return (
                        <Fragment key={index}>
                            <p className="inline-flex mt-1 font-semibold ml-2">
                                {translationsVehicleData[item]}:
                                <p className="uppercase pl-1">{group.data[item] || 'não informado'}</p>
                            </p>
                            <div className="w-full border-b-[1.9px] border-purple-400" />
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default VehicleDataTable