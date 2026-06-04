import React from 'react';
import { View, Text } from 'react-native';

export default function AlertCard({ tipo, local }) {
  return (
    <View style={{ padding: 10, borderWidth: 1, marginBottom: 8 }}>
      <Text>🚨 {tipo.toUpperCase()}</Text>
      <Text>{local}</Text>
    </View>
  );
}
