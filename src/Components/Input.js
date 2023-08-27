import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Input = ({ isPassword, placeHolder ,onChangeText, value}) => {
    const [text, setText] = useState("")
    const [visibiltyPassword, setVisibiltyPassword] = useState(isPassword)
    return (
        <View style={styles.container}>
            <TextInput autoCapitalize="none" value={value} onChangeText={onChangeText} secureTextEntry={visibiltyPassword} style={[styles.Input,{padding: isPassword ? 10: 10}]} placeholder={placeHolder}></TextInput>
           { isPassword ? <TouchableOpacity onPress={() => setVisibiltyPassword(!visibiltyPassword)} >
            <Icon name={visibiltyPassword ? "eye-slash" : "eye"} color="black" size={30}></Icon>
           </TouchableOpacity> : null}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#DADADA",
        margin: RFPercentage(1),
        marginHorizontal:RFPercentage(1.2),
        padding: 10,
        borderRadius: 20,
        paddingVertical: Platform.OS === "android" ? null : 15,
        fontSize: 15,
        alignItems: "center",
        justifyContent: "space-between"
    },
    Input: {
        flex:1,
        color:"black"
    },
    showPasswordButtonStyle: { 
        height: 20, 
        width: 20, 
        backgroundColor: "gray" ,
        borderRadius:10
    }
})