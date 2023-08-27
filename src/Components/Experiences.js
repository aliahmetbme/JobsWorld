import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Experiences = () => {
  return (
    <View style={{padding:RFPercentage(2), borderBottomWidth:1}}>
      <Text style={{fontSize:RFPercentage(2), fontWeight:"bold"}}>MOBILE SOFTWARE ENGINEERING INTERN</Text>
      <Text style={{fontSize:RFPercentage(1.35), fontWeight:"600",marginVertical:RFPercentage(1)}}>Aruna Yazılım Danışmanlık · Stajyer</Text>
      <Text style={{marginBottom:RFPercentage(1),fontWeight:"500", fontSize:RFPercentage(1.5)}}>Haz 2023 - Halen · 3 ay</Text>
      <Text style={{fontSize:RFPercentage(1.6), fontWeight:"600"}}>Yetenekler : JavaScript · React Native · Mobil Uygulama Geliştirme</Text>

    </View>
  )
}

export default Experiences
