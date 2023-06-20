import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const VingroupButton = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text 
          style={{color:'white', fontWeight:'bold'}}
          onPress={props.onPress}
        >{props.TenButton}</Text>
    </TouchableOpacity>
  )
}

export default VingroupButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        width: 100,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
    },
});