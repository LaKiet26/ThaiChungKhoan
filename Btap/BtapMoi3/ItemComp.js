import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const ItemComp = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Movie Detail')}
        >
            <View style={styles.img}>
                <Image
                    source={require('../../assets/the-super-mario-bros-movie-8971-1680853388.jpg')}
                    style={{ width: width * 22 / 100, height: height * 16 / 100 }}
                />
            </View>
            <View style={styles.title}>
                <Text style={styles.text}>The Super Mario Bros .Movie (2022)</Text>
            </View>
            <View style={styles.icon}>
                <AntDesign name="right" size={20} color="black" />
            </View>
        </TouchableOpacity>
    )
}

export default ItemComp

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 18 / 100,
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    img: {
        width: width * 25 / 100,
        height: height * 18 / 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: width * 65 / 100,
        height: height * 18 / 100,
        alignItems: 'center',
        paddingVertical: 20,
    },
    icon: {
        width: width * 10 / 100,
        height: height * 18 / 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight:'bold',
    },
});