import { SafeAreaView, StyleSheet, Text, Alert , Image, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { Formik } from "formik"
import Input from '../Components/Input'
import { RFPercentage } from 'react-native-responsive-fontsize'
import GoogleButton from '../Components/GoogleButton'
import { light_blue } from '../Components/Colors'

const LoginPage = ({navigation}) => {
    const initialValues = {
        email: "",
        password: ""
    }

    function logIn(values) {
        if (values.email === "" || values.password === "") {
            Alert.alert("Hata", "Boş bırakılamaz")
            return
        }

        navigation.navigate("DrawerNavigation")

    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../Assets/LoginIcon.jpeg")} style={styles.Image}></Image>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => logIn(values)}>
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <Input onChangeText={handleChange("email")} value={values.email} placeHolder={"E- mail"}></Input>
                        <Input onChangeText={handleChange("password")} value={values.password} placeHolder={"Password"} isPassword={true}></Input>
                        <TouchableOpacity onPress={handleSubmit} style={{alignSelf:"center",padding:15,backgroundColor:"#252525",width:RFPercentage(43),alignItems:"center", borderRadius:RFPercentage(3),marginVertical:RFPercentage(2)}}>
                            <Text style={{alignSelf:"center", fontSize:RFPercentage(2),fontWeight:"bold", color:"white"}}>Log In</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <Text style={{alignSelf:"center", fontSize:RFPercentage(2), fontStyle:"italic", fontWeight:"bold"}}>OR</Text>
            <GoogleButton></GoogleButton>
        </SafeAreaView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    Image:{
        overflow:"hidden",
        width: RFPercentage(30),
        height:RFPercentage(30),
        resizeMode:"contain",
        alignSelf:"center",
    }
})