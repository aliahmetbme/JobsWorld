import { StyleSheet, Text, View, ScrollView, SafeAreaView, Touchable } from 'react-native'
import RenderHtml from 'react-native-render-html';
import React from 'react'
import useFetch from '../Hooks/useFetch'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from "react-native-vector-icons/FontAwesome5"
import LinkButton from '../Components/LinkButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const URL = "https://www.themuse.com/api/public/jobs"

const JobsDetail = ({ route , navigation}) => {
    const id = route.params.id
    const { data } = useFetch(URL, id)

    const converPublicationDate = (date) => {
        // Tarih dizesini Date nesnesine çevirme
        const dateObject = new Date(date);
        // Tarihi istediğiniz formatında elde etme
        const formattedDate = `${dateObject.getDate()} . ${dateObject.getMonth() + 1} . ${dateObject.getFullYear()}`;
        return formattedDate
    }

    source = {
        html: data.contents
    }
    return (

        data.contents ? (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{data.name}</Text>
                <SafeAreaView>
                <DescriptionsJob iconName={"calendar-alt"} descriptionTitle={"Publication Date"} descriptionData={converPublicationDate(data.publication_date)}></DescriptionsJob>
                <DescriptionsJob iconName={"suitcase"}descriptionTitle={"Categories"} descriptionData={data.categories[0].name}></DescriptionsJob>
                <DescriptionsJob iconName={"map-marked"}descriptionTitle={"Locations"} descriptionData={data.locations[0].name}></DescriptionsJob>
                <DescriptionsJob iconName={"address-card"}descriptionTitle={"Levels"} descriptionData={data.levels[0].name}></DescriptionsJob>
                <DescriptionsJob iconName={"city"}descriptionTitle={"Company"} descriptionData={data.company.name}></DescriptionsJob>
                <LinkButton title={"Go to Jobs webpage"} url={data.refs.landing_page}></LinkButton>
                <RenderHtml tagsStyles={styles.HTMLView} source={source} contentWidth={100} />
                </SafeAreaView>
            </ScrollView>

        ) : (
            <Text>Loading</Text>
        )
    );
}

export default JobsDetail

const DescriptionsJob = ({ iconName, descriptionTitle, descriptionData }) => {
    return (
        <View style={{ flexDirection: "row", marginTop: RFPercentage(2) , alignSelf:"center"}}>
            {iconName ? <Icon name={iconName} color="black" size={30} style={styles.Icon}></Icon> : null}
            <Text style={styles.Descriptions}>{descriptionTitle} : {descriptionData}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: RFPercentage(0.9),
        backgroundColor: "white"
    },
    title: {
        color: "black",
        fontWeight: "700",
        fontSize: RFPercentage(4),
        textAlign: "center"
    },
    HTMLView: {
        p: {
            fontSize: 16,
            lineHeight: 24,
            marginBottom: 10,
            margin: 10,
        },
        a: {
            color: 'blue',
            textDecorationLine: 'underline',
        },
        h1: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        }, img: {
            width: 40,
            height: 40
        }
    },
    Descriptions: {
        padding: RFPercentage(1),
        fontSize: RFPercentage(2),
        fontWeight: "bold",
        color: "black"
    },
    Icon: { marginLeft: 10 }
})