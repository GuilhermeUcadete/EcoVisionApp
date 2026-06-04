import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    router.replace('/login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>⚙️ Configurações</Text>

      <TouchableOpacity onPress={logout}>
        <Text style={{ color: 'red', marginTop: 20 }}>
          Sair da conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}