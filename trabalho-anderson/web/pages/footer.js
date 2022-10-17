import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Tab, Text, TabView } from '@rneui/themed';

export default function Footer() {
  const [index, setIndex] = React.useState(0);
  return(
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Recente"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        containerStyle={{
          backgroundColor:"#e8985a"
        }}
      />
      <Tab.Item
        title="favorito"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        containerStyle={{
          backgroundColor:"#e8985a"
        }}
      />
      <Tab.Item
        title="Carrinho"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        containerStyle={{
          backgroundColor:"#e8985a"
        }}
      />
    </Tab>

    
  </>
  )
}