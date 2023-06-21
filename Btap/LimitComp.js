import { StyleSheet, Text, View } from 'react-native'
import React, {Component, useState} from 'react'
import { TouchableOpacity } from 'react-native';

const LimitComp = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalItems = componentsList.length;
    const totalPages = Math.ceil(totalItems/ itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = componentsList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
        {currentItems.map((component, index) => (
            <Component key={index} {...component} />
        ))}
        <View>
            <TouchableOpacity
                onPress={() => setCurrentPage(currentPage - 1)}
                disabled = {currentPage === 1}
            >
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setCurrentPage(currentPage + 1)}
                disabled = {currentPage === totalPages}
            >
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LimitComp

const styles = StyleSheet.create({})