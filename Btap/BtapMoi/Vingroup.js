import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import VingroupButton from './VingroupButton'

const Vingroup = () => {
  const [value, getvalue] = useState("VIN");
  const [title, gettitle] = useState("VIN GROUP");
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={{fontSize: 50}}>{title}</Text>
        <Text style={{fontSize: 80}}>{value}</Text>
        <Text style={{color:'red', fontSize: 25}}>value {value}</Text>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.buttonR}>
            <VingroupButton TenButton="VIN GROUP" onPress={() => {getvalue("VIN"), gettitle("VIN GROUP")}}/>
            <VingroupButton TenButton="FLC" onPress={() => {getvalue("FLC"), gettitle("FLC")}}/>
            <VingroupButton TenButton="VIETJET" onPress={() => {getvalue("VIETJET"), gettitle("VIETJET")}}/>
        </View>
        <View style={styles.buttonR}>
            <VingroupButton TenButton="MASSAN" onPress={() => {getvalue("MASSAN"), gettitle("MASSAN")}}/>
            <VingroupButton TenButton="VINAMILK" onPress={() => {getvalue("VINA"), gettitle("VINAMILK")}}/>
            <VingroupButton TenButton="SRC" onPress={() => {getvalue("SRC"), gettitle("SRC")}}/>
        </View>
        <View style={styles.buttonR}>
            <VingroupButton TenButton="HSBC" onPress={() => {getvalue("HSBC"), gettitle("HSBC")}}/>
            <VingroupButton TenButton="SAM HOLDING" onPress={() => {getvalue("SAM HOLING"), gettitle("SAM HOLDING")}}/>
            <VingroupButton TenButton="PETROLIMEX" onPress={() => {getvalue("PETRO"), gettitle("PETROLIMEX")}}/>
        </View>
      </View>
    </View>
  )
}

export default Vingroup

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    textView: {
        height: "50%",
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
      height:"50%",
    },
    buttonR: {
      marginTop: 20,
      flexDirection:'row',
      justifyContent:'space-around'
    },
});