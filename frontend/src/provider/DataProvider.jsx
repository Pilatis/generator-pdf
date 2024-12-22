import React, { useState } from 'react';
import { DataContext } from '../context/DataContext';
import axios from 'axios';

const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);

    const getDataPdf = async () => {
        try {
            const response = await axios.get('http://localhost:4710/api/data');
            console.log(response.data)
            setData(response.data !== null ? response.data : '');
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }

    };

    const dataColors = data?.customizationConfig

    const fullColors = {
        primaryColor: dataColors?.primaryColor,
        primaryFontColor: dataColors?.primaryFontColor,
        secondColor: dataColors?.secondColor,
        secondFontColor: dataColors?.secondFontColor,

    }

    return (
        <DataContext.Provider value={{
            getDataPdf,
            data,
            fullColors
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider