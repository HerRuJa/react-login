import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormLogin from './FormLogin'
export default function Boody() {
  return (
    <View style= {styles.body}>
      <Text>Chinga tu madre!</Text>
      <FormLogin />
    </View>
  )
}

const styles = StyleSheet.create({
   
      body: {
        flex: 1,
        width: '100%',
        backgroundColor: '#359dfb',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
})