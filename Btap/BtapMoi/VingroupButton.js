import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const VingroupButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 18}}
          onPress={props.onPress}
        >{props.TenButton}</Text>
    </TouchableOpacity>
  )
}

export default VingroupButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BDBDBD',
        width: 110,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
    },
});