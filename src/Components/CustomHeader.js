import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/Ionicons"

const CustomHeader = (props) => {

    return (
        <SafeAreaView style={[styles.header, {backgroundColor: props.color}]}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={props.leftFunction}>
                <Text style={styles.backButtonText}>{props.leftText}</Text>
                <Icon name={props.IconName} size={RFPercentage(3)} color="black"></Icon>
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity
                style={styles.settingsButton}
                onPress={props.rightFuntion}>
                <Text style={styles.settingsButtonText}>{props.rightText}</Text>
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
    },
    backButton: {
        paddingHorizontal: 10,
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
});

export default CustomHeader;
