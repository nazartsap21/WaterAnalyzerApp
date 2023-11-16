import React from 'react'
import {StyleSheet, SafeAreaView, Text, FlatList, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            tds_index: 8.55,
            ec_index: 7.55
        },
        water: [
            {
                main: 'Clear'
            }
        ] 
    },
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            tds_index: 8.55,
            ec_index: 7.55
    },
        water: [
            {
                main: 'Clear'
            }
    ]
    },
    {        
        dt_txt: "2023-02-18 12:00:00",
        main: {
            tds_index: 8.55,
            ec_index: 7.55
        },
        water: [
            {
                main: 'Clear'
            }
    ] 
    }
]

const Item = (props) => {
    const { dt_txt, ec, tds, condition } =  props
    return(
        <View>
            <MaterialCommunityIcons name="water-check-outline" size={36} color="black" />
            <Text>{dt_txt}</Text>
            <Text>{ec}</Text>
            <Text>{tds}</Text>
        </View>
    )
}
const LastIndexes = () => {
    const renderItem = ({ item }) => (
        <Item 
        condition={item.water[0].main} 
        dt_txt={item.dt_txt} 
        ec={item.main.ec_index} 
        tds={item.main.tds_index} 
        />
    )
    return (
        <SafeAreaView style={styles.container}>
            <Text>Quality of water</Text>
            <FlatList data={DATA} renderItem={renderItem} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default LastIndexes