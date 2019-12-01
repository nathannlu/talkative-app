import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default function App() {
  return (
    <WebView 
      source={{ uri: 'https://nathannlu.github.io/talkative-app.github.io/' }}
      style={{ marginTop: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
