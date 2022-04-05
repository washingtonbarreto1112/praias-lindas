import * as React from 'react';
import{View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
    <Text style={estilo.titulo}> Praias Lindas pelo Mundo </Text>
    <Text style={estilo.frase}> Minhas Férias....</Text>
    <ScrollView style={estilo.fotos}>
    <Image style={estilo.img} source={require("./assets/polynesia-g1e527c05c_1920.jpg")}/>
    <Text style={estilo.legenda}> Praia das maldives </Text>
    <Image style={estilo.img} source={require("./assets/maldives-g64acd3079_1920.jpg")}/>
     <Text style={estilo.legenda}> Praia 1 </Text>
    <Image style={estilo.img} source={require("./assets/sunset-g9dbe7718a_1280.jpg")}/>
    <Text style={estilo.legenda}> Praia 2 </Text>
    <Image style={estilo.img} source={require("./assets/beach-g4f450b770_1920.jpg")}/>
    <Text style={estilo.legenda}> Praia 3 </Text>
    </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    fler:1,
    alignItems: 'center',
    backgroundColor: '#D3D3D3'
  },
  titulo:{
    textAlign:'center',
    fontSize: 30,
    marginTop: 45,
    marginBottom: 20
  },
  frase:{
    fontSize:15,
    marginBottom: 20,
    textAlign: 'rigth'
  },
  img:{
    width: 300,
    height: 250,
    borderRadius:5
  },
  legenda:{
    fontFamily:'Verdana',
    fontSize: 10,
    marginBottom: 10,
  },
  fotos:{
    alignItems: 'center'
  }
});











