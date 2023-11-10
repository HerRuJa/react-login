import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function FormLogin() {
  return (
    <View>
      <Text>Iniciar Sesion</Text>
        <View> 
            <Text>Usuario</Text>
            <TextInput />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    TextInput: {
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})