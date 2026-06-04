import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PieChart } from 'react-native-chart-kit';

export default function Analysis() {

  const { points } = useLocalSearchParams();
  const parsedPoints = points ? JSON.parse(points) : [];

  const total = parsedPoints.length;
  const queimadas = parsedPoints.filter(p => p.risco === "queimada").length;
  const desmatamento = parsedPoints.filter(p => p.risco === "desmatamento").length;
  const seguro = parsedPoints.filter(p => p.risco === "baixo").length;

  const screenWidth = Dimensions.get("window").width;

  // ✅ dados para o gráfico
  const chartData = [
    {
      name: "Queimadas",
      population: queimadas,
      color: "#ff4d4d",
      legendFontColor: "#333",
      legendFontSize: 12
    },
    {
      name: "Desmatamento",
      population: desmatamento,
      color: "#ffa500",
      legendFontColor: "#333",
      legendFontSize: 12
    },
    {
      name: "Seguro",
      population: seguro,
      color: "#4caf50",
      legendFontColor: "#333",
      legendFontSize: 12
    }
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>📊 Análise Ambiental</Text>

      {/* GRÁFICO */}
      {total > 0 && (
        <PieChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: () => "#000"
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"10"}
          absolute
        />
      )}

      {/* RESUMO */}
      <View style={styles.card}>
        <Text>Total analisado: {total}</Text>
        <Text>🔥 Queimadas: {queimadas}</Text>
        <Text>🌳 Desmatamento: {desmatamento}</Text>
        <Text>✅ Seguras: {seguro}</Text>
      </View>

      {/* INTERPRETAÇÃO */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>🧠 Interpretação</Text>

        {queimadas > 0 && (
          <Text style={styles.alert}>
            🚨 Existem áreas críticas
          </Text>
        )}

        {desmatamento > 0 && (
          <Text>
            🌳 Áreas em atenção detectadas
          </Text>
        )}

        {seguro > desmatamento && (
          <Text>
            ✅ Maioria segura
          </Text>
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    elevation: 3
  },

  subtitle: {
    fontWeight: 'bold',
    marginBottom: 10
  },

  alert: {
    color: 'red',
    fontWeight: 'bold'
  }
});

