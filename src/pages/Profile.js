import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from "react-native-vector-icons/FontAwesome5"
import { ScrollView } from 'react-native-gesture-handler'
import LinkButton from '../Components/LinkButton'
import Educstions from '../Components/Educstions'
import Experiences from '../Components/Experiences'

const Profile = () => {
  return (
    <ScrollView>
      <SafeAreaView></SafeAreaView>
    <View style={styles.container}>
      <Image source={require("../Assets/1660631922034.jpeg")} style={styles.Image}></Image>
      <Text style={styles.name}>ALİ AHMET ERDOĞDU</Text>
      <Text style={styles.jobTitle}>MOBILE DEVELOPER - ARUNA YAZILIM </Text>
      <LinkButton url={"https://www.linkedin.com/in/ali-ahmet-erdo%C4%9Fdu-bme/"} title={"Linkedin Page"}></LinkButton>
      <View style={styles.AboutMe}>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
          <Text>About Me</Text>
          <Icon name={"pen"} size={20} color="black"></Icon>
        </View>
        <Text style={styles.explanation}>
          I'm a software and biomedical engineering student at Izmir University of Economics. During my freshman year, I discovered my interest in software and successfully applied for the double major program. I am interested in medicine and software so I would like to improve myself in mobile app development and AI in medicine as academically.

          My ultimate goal is to pursue a career in software engineering, continuously improve myself, and contribute meaningfully to both my personal growth and the companies I work with. 

          I'm particularly passionate about mobile application development and eager to explore new opportunities, expand my knowledge, and make a positive impact in the field of software engineering.

          Collaboration and teamwork are important to me, and I enjoy exchanging ideas with colleagues and learning from other professionals in diverse teams.

          My academic interests lie in AI and Python-based image processing for medical projects.</Text>
     
      </View>
      <View style={{backgroundColor:"#DADADA",margin:RFPercentage(1),borderRadius:RFPercentage(2)}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{margin:RFPercentage(3), marginBottom:RFPercentage(0.3), verticalAlign:"middle",flex:1}}>EDUCATIONS</Text>
            <Icon name={"pen"} size={25} style={{margin:RFPercentage(2)}} color="black"></Icon>
            <Icon name={"plus"} size={25} style={{margin:RFPercentage(2)}} color="black"></Icon>
        </View>
        <Educstions></Educstions>
        <Educstions></Educstions>
        <Educstions></Educstions>
      </View>
      <View style={{backgroundColor:"#DADADA",margin:RFPercentage(1),borderRadius:RFPercentage(2), padding:RFPercentage(1)}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{margin:RFPercentage(3), marginBottom:RFPercentage(0.3), verticalAlign:"middle",flex:1}}>EXPERIENCES</Text>
            <Icon name={"pen"} size={25} style={{margin:RFPercentage(2)}} color="black"></Icon>
            <Icon name={"plus"} size={25} style={{margin:RFPercentage(2)}} color="black"></Icon>
        </View>
        <Experiences></Experiences>
        <Experiences></Experiences>
        <Experiences></Experiences>
      </View>


    </View>
    </ScrollView> 
  )
}

export default Profile

const styles = StyleSheet.create({
  Image:{
    height:RFPercentage(20),
    width:RFPercentage(20),
    borderRadius:RFPercentage(20)/2,
    margin:RFPercentage(2),
    padding:RFPercentage(3)
  },
  jobTitle:{
    marginHorizontal:RFPercentage(2),
    marginTop:RFPercentage(0.5)
  },
  name:{
    fontWeight:"700",
    fontSize:RFPercentage(2.5),
    marginHorizontal:RFPercentage(2)
  },
  container:{
    flex:1,
    padding:10
  },
  AboutMe:{
    padding:20,
    margin:10,
    backgroundColor:"#DADADA",
    borderRadius:RFPercentage(2)
  },
  explanation:{
    fontWeight:"300",
    fontSize:RFPercentage(1.5)
  }
})