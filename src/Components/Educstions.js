import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Educstions = () => {
  return (
    <View style={styles.container}>
      <Text>İzmir Ekonomi Üniversitesi</Text>
      <Text>Lisans Derecesi - Yazılım Mühendisliği</Text>
      <Text>Eyl 2022 - Tem 2026</Text>
    </View>
  )
}

export default Educstions

const styles = StyleSheet.create({
    container:{
        margin:RFPercentage(1),
        padding:RFPercentage(2),
        borderBottomWidth:RFPercentage(0.3),
        borderBottomColor:"gray"
    }
})