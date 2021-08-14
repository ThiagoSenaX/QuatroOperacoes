import React,{useState} from 'react';

import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default function App(){
const [numero1, setNUMERO1] = useState('');
const [numero2, setNUMERO2] = useState('');

function soma(){
  const resultado = parseFloat(numero1) + parseFloat(numero2);
  alert('Resultado da soma: ' + resultado);
}

function subtracao(){
  const resultado = parseFloat(numero1) - parseFloat(numero2);
  alert('Resultado da subtração: ' + resultado);
}

function multiplica(){
  const resultado = parseFloat(numero1) * parseFloat(numero2);
  alert('Resultado da multiplicação: ' + resultado);
}

function divisao(){
  const resultado = parseFloat(numero1) / parseFloat(numero2);
  alert('Resultado da divisão: ' + resultado);
}

  return(
<View style={estilo.container}>
  <Image style={estilo.img} source={require("./assets/calculadora.png")}/>
  <Text style={estilo.titulo}>CALCULADORA</Text>

  <TextInput style={estilo.input} value={numero1} keyboardType='numeric' onChangeText={(numero1)=> setNUMERO1(numero1)} placeholder="Digite um número"/> 
  <TextInput style={estilo.input} value={numero2} keyboardType='numeric' onChangeText={(numero2)=> setNUMERO2(numero2)} placeholder="Digite um número"/>

  <TouchableOpacity style={estilo.botao} onPress={soma}>
    <Text style={estilo.txtbotao}>+</Text>
  </TouchableOpacity> 

  <TouchableOpacity style={estilo.botao} onPress={subtracao}>
    <Text style={estilo.txtbotao}>-</Text>
  </TouchableOpacity> 

  <TouchableOpacity style={estilo.botao} onPress={divisao}>
    <Text style={estilo.txtbotao}>÷</Text>
  </TouchableOpacity> 

  <TouchableOpacity style={estilo.botao} onPress={multiplica}>
    <Text style={estilo.txtbotao}>x</Text>
  </TouchableOpacity>

</View>
  );
}

const estilo = StyleSheet.create({

container:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F0F8FF"
},

input:{
backgroundColor: '#A9A9A9',
textAlign:'center',
margin: 15,
padding: 10,
borderRadius: 15,
fontSize: 20,
width: 240
},

titulo:{
textAlign:'center',
fontSize: 30,
marginBottom: 20,
color: '#000080',
fontWeight: 'bold'
},

botao:{
justifyContent: 'center',
textAlign: 'center',
backgroundColor:'#00BFFF',
padding: 10,
margin: 8,
borderRadius: 15,
width: 240
},

txtbotao:{
fontSize: 15,
fontWeight: 'bold',
textAlign:'center'
},

img:{
  marginBottom: 30,
  width: 100,
  height: 100
}

});