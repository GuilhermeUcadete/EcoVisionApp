import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { getSatelliteData } from '../services/satelliteService';
import MapCard from '../components/MapCard';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useFocusEffect } from 'expo-router';

export default function Dashboard() {

  const [points, setPoints] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState("");

  const router = useRouter();

  // ✅ Atualiza usuário sempre que voltar pra tela
  useFocusEffect(
    useCallback(() => {
      loadUser();
    }, [])
  );

  // ✅ Primeira carga
  useEffect(() => {
    loadSavedData();
  }, []);

  // ✅ carregar usuário
  const loadUser = async () => {
    const u = await AsyncStorage.getItem('user');
    if (u) setUser(u);
  };

  // ✅ carregar do cache
  const loadSavedData = async () => {
    try {
      const saved = await AsyncStorage.getItem('points');

      if (saved) {
        setPoints(JSON.parse(saved));
        setLoading(false);
      } else {
        await loadData();
      }
    } catch (err) {
      console.log(err);
      await loadData();
    }
  };

  // ✅ atualizar manual
  const loadData = async () => {
    try {
      setLoading(true);

      const data = await getSatelliteData();

      setPoints(data);

      await AsyncStorage.setItem('points', JSON.stringify(data));

      setTime(new Date().toLocaleTimeString());

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ logout
  const logout = async () => {
    await AsyncStorage.removeItem('user');
    router.replace('/login');
  };

  // ✅ métricas
  const queimadas = points.filter(p => p.risco === "queimada").length;
  const desmatamento = points.filter(p => p.risco === "desmatamento").length;
  const seguro = points.filter(p => p.risco === "baixo").length;

  // ✅ loading
  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60 }}
    >

      {/* ✅ HEADER COMPONENT */}
      <Header user={user} onLogout={logout} />

      {/* SUBTEXTO */}
      <Text style={styles.subtitle}>
        Monitoramento ambiental em tempo real
      </Text>

      <Text style={styles.update}>
        ⏱️ Atualizado às {time || "—"}
      </Text>

      {/* ALERTA */}
      {queimadas > 0 && (
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>
            🚨 Risco de queimadas detectado
          </Text>
        </View>
      )}

      {/* MÉTRICAS */}
      <View style={styles.metricsContainer}>
        <View style={[styles.metricCard, { backgroundColor: '#ffdddd' }]}>
          <Text style={styles.metricNumber}>🔥 {queimadas}</Text>
          <Text>Queimadas</Text>
        </View>

        <View style={[styles.metricCard, { backgroundColor: '#fff3cd' }]}>
          <Text style={styles.metricNumber}>🌳 {desmatamento}</Text>
          <Text>Desmatamento</Text>
        </View>

        <View style={[styles.metricCard, { backgroundColor: '#ddffdd' }]}>
          <Text style={styles.metricNumber}>✅ {seguro}</Text>
          <Text>Seguro</Text>
        </View>
      </View>

      {/* BOTÃO MAPA */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: '/map',
            params: { points: JSON.stringify(points) }
          })
        }
      >
        <Text style={styles.buttonText}>🗺️ Ver mapa</Text>
      </TouchableOpacity>

      {/* BOTÃO ANALYSIS */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: '/analysis',
            params: { points: JSON.stringify(points) }
          })
        }
      >
        <Text style={styles.buttonText}>📊 Análise</Text>
      </TouchableOpacity>

      {/* BOTÃO ATUALIZAR */}
      <TouchableOpacity style={styles.refresh} onPress={loadData}>
        <Text style={styles.refreshText}>🔄 Atualizar dados</Text>
      </TouchableOpacity>

      {/* LISTA */}
      <Text style={styles.section}>📍 Áreas Monitoradas</Text>

      {points.map(point => (
        <MapCard
          key={point.id}
          data={point}
          allPoints={points}
        />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  subtitle: {
    marginBottom: 5,
    color: '#555'
  },

  update: {
    marginBottom: 15,
    color: '#777'
  },

  alertBox: {
    backgroundColor: '#ffcccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15
  },

  alertText: {
    color: 'red',
    fontWeight: 'bold'
  },

  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  metricCard: {
    width: '30%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  metricNumber: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#2e7d32',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  refresh: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20
  },

  refreshText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});