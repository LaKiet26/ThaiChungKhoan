import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const VingroupButton = (props) => {
  return (
    <TouchableOpacity styl={styles.button}>
        <Text>{props.TenButton}</Text>
    </TouchableOpacity>
  )
}

export default VingroupButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        width: 80,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
    },
});