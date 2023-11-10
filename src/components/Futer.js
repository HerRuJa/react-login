import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Futer() {
  return (
    <View style= {styles.futer}>
      <Text>Futer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
      futer: {
        height: 60,
        width: '100%',
        backgroundColor: '#346fa4',
        alignItems: 'center',
        justifyContent: 'center',
      },
})