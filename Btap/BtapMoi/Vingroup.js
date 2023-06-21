import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import VingroupButton from './VingroupButton'
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DATA from './Api';

const numColumns = 3;

const Vingroup = () => {
  const [value, getvalue] = useState("VIN");
  const [title, gettitle] = useState("VIN GROUP");
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={{ fontSize: 50 }}>{title}</Text>
        <Text style={{ fontSize: 80 }}>{value}</Text>
        <Text style={{ color: 'red', fontSize: 25 }}>value {value}</Text>
      </View>
      <FlatList
          style={styles.buttonView}
          data={DATA}
          numColumns={numColumns}
          //initialNumToRender={3}

          initialScrollIndex={1}
          renderItem={({ item }) =>{
            return (
              <View style={styles.buttonR}>
                <VingroupButton TenButton ={item.title} onPress={() => {getvalue(item.unit), gettitle(item.value)}}/>
              </View>
            )
          }}
        />
        {/* <View style={{height: '25%', alignSelf:'center', flexDirection:'row'}}>

          <TouchableOpacity onPress={setPage(page-1)}>
            <AntDesign name="caretleft" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={setPage(page + 1)} disabled={page * itemsPerPage >= data.length}>
            <AntDesign name="caretright" size={24} color="black" />
          </TouchableOpacity>
        </View> */}
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
    height: "25%",
    alignSelf: 'center',
    
  },
  buttonR: {
    marginTop: 20,
    marginHorizontal: 5,
  },
});