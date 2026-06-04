import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getSatelliteData } from '../services/satelliteService';
import { analyzeEnvironmentalRisk } from '../utils/helpers';
import AlertCard from '../components/AlertCard';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    const data = await getSatelliteData();
    const analyzed = analyzeEnvironmentalRisk(data);
    setAlerts(analyzed.filter(item => item.risco !== "baixo"));
  };

  return (
    <View>
      {alerts.map(alert => (
        <AlertCard
          key={alert.id}
          tipo={alert.risco}
          local={`${alert.lat}, ${alert.lng}`}
        />
      ))}
    </View>
  );
}