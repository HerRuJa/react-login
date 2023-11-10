import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.head}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    head: {
        height: 80,
        width: '100%',
        backgroundColor: '#86dcef',
        alignItems: 'center',
        justifyContent: 'center',
      },
})