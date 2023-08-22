import { StyleSheet, Text, View , ScrollView} from 'react-native'
import HTMLView from "react-native-htmlview"
import React from 'react'
import useFetch from '../Hooks/useFetch'
import { RFPercentage } from 'react-native-responsive-fontsize'
URL = "https://www.themuse.com/api/public/jobs"

const JobsDetail = ({route}) => {
 const id = route.params.id
 const {data} = useFetch(URL,id)
 return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>  
      <HTMLView value={data.contents} stylesheet={styles.HTMLView} />
    </ScrollView>
  );
}

export default JobsDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        color:"black",
        fontWeight:"700",
        fontSize:RFPercentage(4),
        textAlign:"center"
    },
    HTMLView:{
        p: {
            fontSize: 16,
            lineHeight: 24,
            marginBottom: 10,
            margin:10
        },
        a: {
            color: 'blue',
            textDecorationLine: 'underline',
        },
        h1: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        },img:{
            width:40,
            height:40
        }
    }
})