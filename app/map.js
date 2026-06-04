import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useLocalSearchParams } from 'expo-router';

export default function Map() {

  const { points, data } = useLocalSearchParams();

  const parsedPoints = points ? JSON.parse(points) : [];
  const selectedPoint = data ? JSON.parse(data) : null;

  const getColor = (risco) => {
    if (risco === "queimada") return "red";
    if (risco === "desmatamento") return "orange";
    return "green";
  };

  return (
    <MapView
      style={{ flex: 1 }}
      mapType="satellite"
      region={{
        latitude: selectedPoint
          ? selectedPoint.lat
          : parsedPoints[0]?.lat || -14.2,
        longitude: selectedPoint
          ? selectedPoint.lng
          : parsedPoints[0]?.lng || -51.9,
        latitudeDelta: 20,
        longitudeDelta: 20,
      }}
    >
      {parsedPoints.map(point => (
        <Marker
          key={point.id}
          coordinate={{
            latitude: point.lat,
            longitude: point.lng
          }}
          pinColor={getColor(point.risco)}
        />
      ))}

      {selectedPoint && (
        <Marker
          coordinate={{
            latitude: selectedPoint.lat,
            longitude: selectedPoint.lng
          }}
          pinColor={getColor(selectedPoint.risco)}
          title="Selecionado"
        />
      )}
    </MapView>
  );
}
