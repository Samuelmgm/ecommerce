import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Products from './web/pages/products';
import Header from './web/pages/header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Footer from './web/pages/footer'
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <Products />
      <Footer/>
    </SafeAreaProvider>
  );
}
