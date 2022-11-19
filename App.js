import React, {useState, useRef} from 'react';
import {View, Text, TextInput ,StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

import Infocep from './src/Infocep'

import api from './src/services/api'

export default function App(){
  
  const [cep, setCep] =useState("");
  const [infoCep, setInfoCep] = useState("");
  const inputref = useRef(null);
  
  async function buscarCEP(){
    if (cep == ''){
      alert('Digite um CEP!');
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`).catch((e)=> {
        console.log(e);
      });
      setInfoCep(response.data); 
    } catch (error) {
      alert('CEP Invalido')
    }
    Keyboard.dismiss();
  }

  function limpaTela(){
    setCep("");
    setInfoCep("");
    inputref.current.focus();
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscador de CEP</Text>
      <TextInput 
        placeholder='Ex: 90300303'
        onChangeText={(value)=> setCep(value)}
        value={cep}
        style={styles.input}
        keyboardType= 'numeric'
        ref={inputref}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity 
          style={[styles.btn, { borderBottomRightRadius: 0,
                                backgroundColor: 'green' }]}
          onPress={buscarCEP}
        >
          <Text style={styles.btnTexto}>Buscar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.btn, { borderBottomLeftRadius: 0 }]}
          onPress={limpaTela}
        >
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
      
      {infoCep && <Infocep data={infoCep}/>}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  titulo:{
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },
  input:{
    borderWidth: 1,
    width: '60%',
    marginTop: 20,
    borderColor: 'grey',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  areaBtn:{
    flexDirection: 'row'
  },
  btn:{
    width: '30%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  btnTexto:{
    textAlign: 'center',
    color: 'white'
  }

})