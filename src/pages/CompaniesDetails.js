import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from "react-native-vector-icons/FontAwesome5"
import LinkButton from '../Components/LinkButton'
import { green, primaryColor } from '../Components/Colors'
const URL = "https://www.themuse.com/api/public/companies"
const CompaniesDetails = ({ route }) => {
  const id = route.params.id
  const { data, loading } = useFetch(URL, id)

  const dispatch = useDispatch()


  try {
    const converPublicationDate = (date) => {
    
      // Tarih dizesini Date nesnesine çevirme
      const dateObject = new Date(date);
    
      // Tarihi istediğiniz formatında elde etme
      const formattedDate = `${dateObject.getDate()} . ${dateObject.getMonth() + 1} . ${dateObject.getFullYear()}`;
      
      return formattedDate
    }
  
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
          <DescriptionsComp iconName={"search-location"} descriptionTitle={"Location"} descriptionData={data.locations[0].name}></DescriptionsComp>
          <DescriptionsComp iconName={"industry"} descriptionTitle={"Industry"} descriptionData={data.industries[0].name}></DescriptionsComp>
          <DescriptionsComp iconName={"business-time"} descriptionTitle={"Publication Date"} descriptionData={converPublicationDate(data.publication_date)}></DescriptionsComp>
          <DescriptionsComp iconName={"user-friends"} descriptionTitle={"Company Size"} descriptionData={data.size.name}></DescriptionsComp>
          <LinkButton title={"Go to companies webiste"}  url={data.refs.landing_page}></LinkButton>
        </View>
      )
    }
  } catch (error) {
    console.log(error)
  }
}

export default CompaniesDetails

const DescriptionsComp = ({iconName, descriptionTitle, descriptionData}) => {
  return(
    <View style={{flexDirection:"row", marginTop:RFPercentage(2)}}>
    <Icon name={iconName} color="black" size={30} style={styles.Icon}></Icon>
    <Text style={styles.Descriptions}>{descriptionTitle} : {descriptionData}</Text>
    </View>
  )
}

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
    fontSize: RFPercentage(1.5),
    fontWeight: "bold",
    fontStyle:"italic",
    color:primaryColor
  },
  Icon:{marginLeft:10}
})