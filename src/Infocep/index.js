import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function Infocep({data}){
    console.log(data)
    return(
      <View style={styles.infoarea}>
        <Text style={styles.info}>UF: { data.uf ? data.uf : "N/A" }</Text>
        <Text style={styles.info}>Localidade: { data.localidade ? data.localidade : "N/A" }</Text>
        <Text style={styles.info}>Logradouro: { data.logradouro ? data.logradouro : "N/A"   }</Text>
        <Text style={styles.info}>Bairro: { data.bairro ? data.bairro : "N/A" }</Text>
        <Text style={styles.info}>DDD: { data.ddd ? data.ddd : "N/A" }</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    infoarea:{
        flex: 1,
        marginTop: 60
    },
    info:{
        fontSize: 20,
        color: 'black'
    }
})