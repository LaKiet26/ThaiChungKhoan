import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import VingroupButton from './ButtoonThai'

const Vingroup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text>VIN GROUP</Text>
        <Text>VIN</Text>
        <Text>Value</Text>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.buttonR}>
            <VingroupButton TenButton="VIN GROUP"/>
            <VingroupButton TenButton="FLC"/>
            <VingroupButton TenButton="VIETJET"/>
        </View>
        <View style={styles.buttonR}>
            <VingroupButton TenButton="MASSAN"/>
            <VingroupButton TenButton="VINAMILK"/>
            <VingroupButton TenButton="SRC"/>
        </View>
        <View style={styles.buttonR}>
            <VingroupButton TenButton="HSBC"/>
            <VingroupButton TenButton="SAM HOLDING"/>
            <VingroupButton TenButton="PETROLIMEX"/>
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
});