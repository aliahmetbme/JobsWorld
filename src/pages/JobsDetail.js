import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import RenderHtml from 'react-native-render-html';
import React from 'react'
import useFetch from '../Hooks/useFetch'
import { RFPercentage } from 'react-native-responsive-fontsize'
const URL = "https://www.themuse.com/api/public/jobs"

const JobsDetail = ({ route }) => {
    const id = route.params.id
    const { data } = useFetch(URL, id)

    if (!data) {
        return <Text>Loading...</Text>;
    }
    source = {
        html : data.contents
    }
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
            <Text style={styles.title}>{data.name}</Text>
            {data.contents ? (
                <RenderHtml tagsStyles={styles.HTMLView} source={source} contentWidth={100} />
            ) : (
                <Text>Loading</Text>
            )}
                        </SafeAreaView>

        </ScrollView>
    );
}

export default JobsDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:RFPercentage(0.5)

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
    }
})