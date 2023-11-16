import React from 'react'
import {View, StyleSheet} from 'react-native'
import CurrentIndexes from './src/components/CurrentIndexes'
import LastIndexes from './src/components/LastIndexes'

const App = () => {
  return (
    <View style={styles.container}>
      <LastIndexes />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App