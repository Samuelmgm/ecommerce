import * as React from 'react';
import { Avatar, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { PricingCard, lightColors } from '@rneui/themed';
import { AirbnbRating } from '@rneui/themed';

import Constants from 'expo-constants';
import Creme from '../assets/creme.webp';
import Desodorante from '../assets/desodorante.jpg';
import Fralda from '../assets/fralda.jpg';
import Gillette from '../assets/gillette.jpg';
import Pomada from '../assets/pomada.jpg';
import {useFonts,Brygada1918_400Regular} from '@expo-google-fonts/brygada-1918';


export default function Products() {
  let [fontLoaded] = useFonts({
    Brygada1918_400Regular,
  });
 
  return (
    <ScrollView>
      <Card>
        <Card.Title style={{fontWeight:"bold"}}>Desodorante Rexona</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 240 }} source={Desodorante} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={28}/>
        
        <Text style={{display:"flex", justifyContent:"center", fontSize:30, fontWeight:"bold",fontFamily:"Brygada1918_700Bold"}}>
          R$ 22,90
        </Text>

        <View style={{flex: 1, flexDirection: "column", gap: 3}}>
          <Text style={{ flex:1,fontFamily:"Brygada1918_400Regular"}}>
            72h de proteção contra o suor e o mau odor.
          </Text>
          <Text style={{ flex:2,fontFamily:"Brygada1918_400Regular"}}>
            Sensação de frescor o dia todo.
          </Text>
          <Text style={{ flex:3,marginBottom:20,fontFamily:"Brygada1918_400Regular"}}>
            Tecnologia exclusiva: proteção ativada pelo movimento do corpo.
          </Text>
        </View>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#e8985a"}
        />
      </Card>
            <Card>
        <Card.Title style={{fontWeight:"bold"}}>Fralda Pampers</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={Fralda} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true}/>
        
        <Text style={{display:"flex", justifyContent:"center", fontSize:30, fontWeight:"bold",fontFamily:"Brygada1918_700Bold"}}>
          R$ 65,90
        </Text>
        <View style={{flex: 1, flexDirection: "column", gap: 3}}>
          <Text style={{ flex:1,fontFamily:"Brygada1918_400Regular"}}>
            É fácil de vestir,
          </Text>
          <Text style={{ flex:2,fontFamily:"Brygada1918_400Regular"}}>
            Mantém a absorção por até 12 horas,
          </Text>
          <Text style={{ flex:3,marginBottom:20,fontFamily:"Brygada1918_400Regular"}}>
            Proporciona um toque macio.
          </Text>
        </View>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#e8985a"}
        />
      </Card>
            <Card>
        <Card.Title style={{fontWeight:"bold"}}>Gillette</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={Gillette} />
        <AirbnbRating defaultRating={3.5} count={5} isDisabled={true}/>
        
        <Text style={{display:"flex", justifyContent:"center", fontSize:30, fontWeight:"bold",fontFamily:"Brygada1918_700Bold"}}>
          R$ 18,89
        </Text>
        
        <View style={{flex: 1, flexDirection: "column", gap: 3}}>
          <Text style={{ flex:1,fontFamily:"Brygada1918_400Regular"}}>
            Cabo antiderrapante.
          </Text>
          <Text style={{ flex:2,fontFamily:"Brygada1918_400Regular"}}>
            3 lâminas de longa duração.
          </Text>
          <Text style={{ flex:3,marginBottom:20,fontFamily:"Brygada1918_400Regular"}}>
            Cabeça móvel.
          </Text>
        </View>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#e8985a"}
        />
      </Card>
            <Card>
        <Card.Title style={{fontWeight:"bold"}}>Pomada</Card.Title>
        <Card.Divider />
        <Card.Image style={{height: 100}} source={Pomada} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true}/>
        
        <Text style={{display:"flex", justifyContent:"center", fontSize:30, fontWeight:"bold",fontFamily:"Brygada1918_700Bold"}}>
          R$ 6,79
        </Text>
        <View style={{flex: 1, flexDirection: "column", gap: 3}}>
          <Text style={{ flex:1,fontFamily:"Brygada1918_400Regular"}}>
            Indicado no tratamento de infecções bacterianas da pele e/ou de mucosas, causadas por micro-organismos sensíveis: piodermites, impetigo, eczemas       
            infectados,furúnculos, antraz, ectima, abscessos, acne infectada, intertrigo, úlceras cutâneas e queimaduras infectadas.
          </Text>       
        </View>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#e8985a"}
        />
      </Card>

    </ScrollView>
  );
}

