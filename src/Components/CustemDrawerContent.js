import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <DrawerContentScrollView {...props}>
        <View>
          <Image style={{ alignSelf: "center", width: RFPercentage(10), height: RFPercentage(10), borderRadius: RFPercentage(10) / 2 }} source={require("../Assets/1660631922034.jpeg")}></Image>
          <Text style={{ alignSelf: "center", margin:10, fontWeight:900, fontSize:RFPercentage(2) }}>ALİ AHMET ERDOĞDU</Text>
          <Text style={{ alignSelf: "center",margin:10, fontWeight:600, fontSize:RFPercentage(1.5) }}>MOBILE DEVELOPER - ARUNA YAZILIM</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={props.onPress} style={{ alignSelf: "flex-start", margin: 15, justifyContent: "center", flexDirection: "row" }}>
        <Icons name="logout" color="black" size={RFPercentage(3)} ></Icons>
        <Text style={{ marginHorizontal: 10, flex: 1, alignSelf: "center", color: "black", fontSize: RFPercentage(1.5) }}>Sing Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawerContent
