import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import VingroupButton from './VingroupButton'
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DATA from './Api';
import { ScrollView } from 'react-native';

const numColumns = 3;

const Vingroup = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [percent, setPercent] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const apiKey = '2NG5K5CMQA8II6EV';
  // const symbol = 'IBM'; 
  const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=2NG5K5CMQA8II6EV';

  const getData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      // setData(json);
      // console.log(data);

      //lấy data theo vùng đc chọn
      const change = json['Global Quote']['09. change'];
      const changePercent = json['Global Quote']['10. change percent'];
      const changeSymbol = json['Global Quote']['01. symbol'];

      // Log the values
      console.log('01. symbol', changeSymbol);
      console.log('09. Change:', change);
      console.log('10. Change Percent:', changePercent);

      // change value
      setTitle(changeSymbol);
      setValue(change);
      setPercent(changePercent);
      // nếu là true thì sẽ hiện vòng loadinh, nên sau khi setdata xong thì sẽ tắt loadinh = setLoading(false)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    //setLoading(true);
    //getData();
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <>
        <View style={styles.textView}>
          <Text style={{ fontSize: 50 }}>{title}</Text>
          <Text style={{ fontSize: 80 }}>{title}</Text>
          <Text style={{ color: 'red', fontSize: 25 }}>{value}</Text>
          <Text style={{ color: 'red', fontSize: 25 }}>{percent}</Text>
        </View>
        <FlatList
            style={styles.buttonView}
            data={DATA}
            numColumns={numColumns}
            initialScrollIndex={1}
            renderItem={({ item }) =>{
              return (
                <View style={styles.buttonR}>
                  <VingroupButton TenButton ={item.title} onPress={() => {setValue(item.unit), setTitle(item.value)}}/>
                </View>
              )
            }}
          />
        </>
      )}
    </View>
  );
}

export default Vingroup

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent:'center',
  },
  textView: {
    height: "50%",
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    height: "50%",
    backgroundColor:'pink',
  },
  buttonR: {
    margin: 10,
  },
});