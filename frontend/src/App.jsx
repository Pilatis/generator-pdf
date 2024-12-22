import React, { useState, useEffect } from 'react';
import { useData } from './hook/useData';
import Header from './components/Header';
import MainInformation from './components/MainInformation';
import VehicleDataTable from './components/VehicleDataTable';
import PartsGroupBox from './components/PartsGroupBox';
import ObservationGroup from './components/ObservationGroup';

function App() {
  const { data, getDataPdf } = useData();
  const [theGroup, setTheGroup] = useState();

  const content = '';

  useEffect(() => {
    getDataPdf();
  }, []);

  const buildGroup = (group) => {
    switch (group.groupType) {
      case 'DATA':
        return <VehicleDataTable group={group} />
      case 'PARTS':
        return <PartsGroupBox group={group} />
      case 'OBSERVATION':
        return <ObservationGroup group={group} />
    }
  }

  useEffect(() => {
    console.log('não foi executado')
    if (data?.groups) {
      const sortedGroups = data?.groups?.sort((a, b) => a.printOrder - b.printOrder) || [];
      setTheGroup(sortedGroups);
    }
  }, [data])

  return (
    <div className="App">
      <div className="bg-white">
        <Header>
        <div className="qr-code"></div>
        </Header>
        <MainInformation />
        {theGroup && theGroup.map((group) => (
          <div key={group.id}>
            {buildGroup(group)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
