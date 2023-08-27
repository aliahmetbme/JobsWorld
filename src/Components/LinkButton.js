import { StyleSheet, Text, Linking, TouchableOpacity } from 'react-native'
import React , {useCallback}from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize';
import {accentColor, light_blue} from "../Components/Colors"
const LinkButton = ({ url , title}) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
        // android manifest e <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" />
        // ekle
        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={{color:"white", fontWeight:"bold", fontSize:RFPercentage(2)}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default LinkButton

const styles = StyleSheet.create({
    container:{
        alignSelf:"center",
        margin:RFPercentage(3),
        padding:RFPercentage(2),
        paddingHorizontal:RFPercentage(4),
        backgroundColor:"blue",
        borderRadius:RFPercentage(3),
        width:RFPercentage(40),
        alignItems:"center"
    }
})