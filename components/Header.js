import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ user, onLogout }) {
  return (
    <View style={styles.container}>

      {/* TEXTO */}
      <View style={styles.textContainer}>

        <Text style={styles.welcome}>
          👋 Bem-vindo, {user || "Usuário"}
        </Text>

        <Text style={styles.title}>
          EcoVisionAI
        </Text>

        <Text style={styles.subtitle}>
          Monitoramento ambiental inteligente
        </Text>

      </View>

      {/* BOTÃO SAIR */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={onLogout}
        activeOpacity={0.7}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#e8f5e9',
    marginBottom: 20,
    position: 'relative',
    elevation: 3
  },

  textContainer: {
    maxWidth: '80%'
  },

  welcome: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2e7d32'
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4
  },

  logoutButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8
  },

  logoutText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});