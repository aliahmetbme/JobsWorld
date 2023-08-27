import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize'

const URL = "https://www.themuse.com/api/public/companies"
const CompaniesDetails = ({ route }) => {
  const id = route.params.id
  const { data, loading } = useFetch(URL, id)

  const dispatch = useDispatch()

  try {
    useEffect(() => {
      if (data && data.refs && data.refs.logo_image) {
        dispatch({ type: "SET_IMAGE_SOURCE", payload: data.refs.logo_image });
      } else {
        return
      }
    }, [data]);
    if (loading) {
      return (<Text>loading...</Text>)
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.ImageContainer}>
            <Image source={{ uri: data.refs.f1_image }}
              style={styles.Image}></Image>
            <Image source={{ uri: data.refs.f2_image }}
              style={styles.Image}></Image>
            <Image source={{ uri: data.refs.f3_image }}
              style={styles.Image}></Image>
          </View>
          <View>
            <Text style={styles.Descriptions}>Loacaitions : {data.locations[0].name}</Text>
          </View>
          <Text style={styles.Descriptions}>Industry: {data.industries[0].name}</Text>
          <Text style={styles.Descriptions}>Publication Date: {data.publication_date}</Text>
          <Text style={styles.Descriptions}>Company Size: {data.size.name}</Text>
        </View>
      )
    }
  } catch (error) {
    console.log(error)
  }
}

export default CompaniesDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  ImageContainer: {
    flexDirection: "row",
    alignSelf: "center",
    margin: RFPercentage(1),
  },
  Image: {
    overflow: "hidden",
    height: RFPercentage(20),
    width: RFPercentage(12),
    margin: RFPercentage(1),
    borderRadius: 20
  },
  title: {
    textAlign: "center",
    marginTop: RFPercentage(1),
    fontSize: RFPercentage(2),
    fontWeight: "bold"
  },
  Descriptions: {
    padding: RFPercentage(1),
    fontSize: RFPercentage(1.3),
    fontWeight: "bold"
  }
})