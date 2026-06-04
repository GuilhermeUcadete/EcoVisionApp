import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MapCard({ data, allPoints }) {
  const router = useRouter();

  const getColor = () => {
    if (data.risco === "queimada") return "#ff4d4d";
    if (data.risco === "desmatamento") return "#ffa500";
    return "#4caf50";
  };

  const getIcon = () => {
    if (data.risco === "queimada") return "🔥";
    if (data.risco === "desmatamento") return "🌳";
    return "✅";
  };

  const handlePress = () => {
    router.push({
      pathname: '/map',
      params: {
        data: JSON.stringify(data),
        points: JSON.stringify(allPoints) // ✅ envia TODOS os dados
      }
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, { borderLeftColor: getColor() }]}>
        <Text style={styles.title}>
          {getIcon()} {data.risco.toUpperCase()}
        </Text>

        <Text>📍 {data.lat}, {data.lng}</Text>
        <Text>🌡️ {data.temperatura}°C</Text>
        <Text>🌿 Vegetação: {data.vegetacao}%</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    marginBottom: 12,
    backgroundColor: '#fff',
    elevation: 3
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});