import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions,View ,Platform,Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import useLandScape from './Hooks/useLanspcape';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {green} from "./Components/Colors"

import Profile from "./pages/Profile";
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1, }}>
      <DrawerContentScrollView {...props}>
        <View>
          <Image style={{alignSelf:"center",marginVertical:10,width:RFPercentage(10), height:RFPercentage(10), borderRadius:RFPercentage(10)/2}} source={require("./Assets/images.jpeg")}></Image>
          <Text style={{alignSelf:"center"}}>USERNAME</Text>
          <Text style={{alignSelf:"center"}}>JOB TITLE</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={{alignSelf:"flex-start", margin:15, justifyContent:"center",flexDirection:"row"}}>
          <Icons name="logout" color="black" size={RFPercentage(3)} ></Icons>
          <Text style={{marginHorizontal:10,flex:1,alignSelf:"center",color:"black",fontSize:RFPercentage(1.5)}}>Sing Out</Text>
      </TouchableOpacity>
  </View>
  );
};

function MainPage() {
  const { landScape } = useLandScape();

  const TabBarIcon = ({ color, size, iconName }) => {
    return <Icon style={landScape ? { marginHorizontal: -RFPercentage(2) } : {}} name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Jobs") {
            iconName = focused ? "search-circle" : "search-circle-outline";
            size = landScape ? (focused ? RFPercentage(4.75) : RFPercentage(3.5)) : (focused ? RFPercentage(5) : RFPercentage(3))
            color = focused ? "white" : "gray";
          } else if (route.name === "Companies") {
            iconName = focused ? "storefront" : "storefront-outline";
            size = landScape ? ( focused ? RFPercentage(4.75) : RFPercentage(3.5)) : (focused ? RFPercentage(5) : RFPercentage(3))
            color = focused ? "white" : "gray";
          }

          return <TabBarIcon color={color} size={size} iconName={iconName} />;
        },
        tabBarStyle: {
          height: RFPercentage(landScape?6:7),
          backgroundColor:green
        },
        headerShown: false,
        tabBarLabelStyle: {
          color: "white",
          marginTop: 0,
          fontSize:RFPercentage(1.85),
          paddingHorizontal: RFPercentage(1),
        },
        tabBarShowLabel: !landScape
      })}
    >
      <Tab.Screen name="JobsPage" component={Jobs} />
      <Tab.Screen name="Companies" component={Companies} />
    </Tab.Navigator>
  );
}


function Main() {

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <NavigationContainer>
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    
    screenOptions={{
      drawerType: isLargeScreen ? 'permanent' : 'back',
      drawerStyle: isLargeScreen ?  { width: '20%', backgroundColor:"#DADADA" } : { width: '50%', backgroundColor:"#DADADA" },
      overlayColor: 'transparent',
      headerShown: isLargeScreen ? false : true,
      headerStyle:{backgroundColor:green},
      headerTitleStyle:{color:"white"},      
    }}>              
        <Drawer.Screen name="Main Page" component={MainPage} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default Main


