import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer,  } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './Components/CustemDrawerContent';
import MainPage from './pages/MainPage';
import Profile from "./pages/Profile";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function Main({navigation}) {

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />} 
        screenOptions={{
          drawerType: isLargeScreen ? 'permanent' : 'back',
          drawerStyle: isLargeScreen ? { width: '20%', backgroundColor: "#DADADA" } : { width: '50%', backgroundColor: "#DADADA" },
          overlayColor: 'transparent',
          headerShown: isLargeScreen ? false : true ,
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: { color: "white" },
        }}>
        <Drawer.Screen name="Main Page" component={MainPage} options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
 
  );
}



export default Main


