import React from "react"
import {View, Text, SafeAreaView, StyleSheet } from 'react-native'

const CurrentIndexes = () => {
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.tds}>TDS: 6</Text>
        <Text style={styles.quality}>Normal</Text>
        <View style={styles.maxMinWrapper}>
          <Text style={styles.maxMin}>max: 8 </Text>
          <Text style={styles.maxMin}>min: 6</Text>
        </View>
        <Text style={styles.ec}>EC: 6</Text>
        <Text style={styles.quality}>Normal</Text>
        <View style={styles.maxMinWrapper}>
          <Text style={styles.maxMin}>max: 8 </Text>
          <Text style={styles.maxMin}>min: 6</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
      flex:1
    },
    container: {
      backgroundColor: 'aqua',
      flex: 1,
      alignItems: 'center'
    },
    tds: {
      fontSize: 48,
      color: 'black'
    },
    ec: {
      fontSize: 48,
      color: 'black'
    },
    quality: {
      fontSize: 30,
      color: 'black'
    },
    maxMin: {
      color: 'black',
      fontSize: 20
    },
    maxMinWrapper: {
      flexDirection: 'row'
    }
  
  
  })



export default CurrentIndexes