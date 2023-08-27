import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/Ionicons"

const CustomHeader = (props) => {
    return (
        <SafeAreaView style={styles.header}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={props.leftFunction}>
                <Text style={styles.backButtonText}>{props.leftText}</Text>
                <Icon 
                name={props.leftIconName} size={RFPercentage(3)} 
                color="black"></Icon>
            </TouchableOpacity>
            <View>
                {!!props.ImageSource ? <Image source={{uri : props.ImageSource}} style={styles.image} /> : null}
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <TouchableOpacity
                style={styles.settingsButton}
                onPress={props.rightFuntion}>
                <Text style={styles.settingsButtonText}>{props.rightText}</Text>
                <Icon 
                name={props.rightIconName} size={RFPercentage(3)} 
                color="black"></Icon> 
            </TouchableOpacity>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#DADADA',
        padding: 10,
        backgroundColor:"white"
    },
    backButton: {
        paddingLeft: 10,
    },
    backButtonText: {
        color: 'white',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    settingsButton: {
        paddingHorizontal: 10,
    },
    settingsButtonText: {
        color: 'white',
    },
    image:{
        width:RFPercentage(20),
        height:RFPercentage(10), 
        resizeMode:"contain",
        alignSelf:"center",
    }
});

export default CustomHeader;
