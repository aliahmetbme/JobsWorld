import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'

const CompaniesCard = ({items}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{items.name}</Text>
      <Image style={styles.Image} source={{uri: items.refs.logo_image}}></Image>
    </TouchableOpacity>
  )
}

export default CompaniesCard

const styles = StyleSheet.create({
  container:{
    margin:RFPercentage(2),
    backgroundColor:"#DADADA",
    padding:RFPercentage(1),
    alignItems:"center",
    borderRadius:15,
    elevation: 10,
    shadowOffset: {
      width: 5, // Yatay gölge konumu
      height: 5, // Dikey gölge konumu
    },
    shadowOpacity: 0.8, // Gölge opaklığı (0'dan 1'e kadar bir değer olmalı)
    shadowRadius: 7, // Gölgelenme boyutu (blur-radius gibi)
  }, 
  Image:{
    minHeight:100,
    minWidth:200,
    resizeMode:"contain",
  },
  title:{
    color:"black",
    fontSize:RFPercentage(3),
    fontWeight:"900"
  }
})