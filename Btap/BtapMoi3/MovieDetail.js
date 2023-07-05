import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const { width, height } = Dimensions.get('screen');

const MovieDetail = () => {
  const navigate = useNavigation();

  return (
    <View>
      <View style={{ width: width, height: height * 10 / 100, backgroundColor: '#F35120', justifyContent: 'flex-end', alignItems: 'center', padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Movie Detail</Text>
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 48, left: 10 }} onPress={() => navigate.goBack()}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={{ fontSize: 15, color: 'white' }}>Back</Text>
      </TouchableOpacity>

      <View style={styles.main}>
        <View style={styles.imgView}>
          <Image
            source={require('../../assets/the-super-mario-bros-movie-8971-1680853388.jpg')}
            style={styles.img}
          />
          <View style={styles.scoreView}>
            <Text style={{fontSize: 18}}>Meta: 49</Text>
            <Text style={{fontSize: 18}}>imDB: 7.1</Text>
          </View>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>The Super Mario Bros .Movie (2023)</Text>
          <Text style={styles.detail}>Genre: Animation, Adventure, Comedy, Family, Fantasy(1h33m)</Text>
          <Text style={styles.detail}>Released: in the United States on April 5, 2023</Text>
          <Text style={styles.detail}>The Super Mario Bros. Movie is a 2023 American computer-animated adventure film based on Nintendo's Mario video game franchise.</Text>
          <Text style={styles.detail}>Directed by: Aaron Horvath, Michael Jelenic</Text>
          <Text style={styles.detail}>Written by: Matthew Fogel</Text>
          <Text style={styles.detail}>Actor: Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, Fred Armisen</Text>
        </View>
      </View>
    </View>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  imgView: {
    width: width * 30 / 100,
    height: height * 90 / 100,
    alignItems: 'center',
  },
  img: {
    width: width * 25 / 100,
    height: height * 16 / 100,
  },
  titleView: {
    width: width * 70 / 100,
    height: height * 90 / 100,
    paddingRight: width *2.5/100,
  },
  main: {
    height: height * 90 / 100,
    flexDirection: 'row',
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
  },
  scoreView: {
    alignItems: 'flex-start',
    width: width * 25 / 100,
    alignItems: 'flex-start',
  },
  detail: {
    paddingVertical: 5,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
});