import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import CustomDrawerContent from './Components/CustemDrawerContent';
import MainPage from './pages/MainPage';
import Profile from "./pages/Profile";
import { Provider } from 'react-redux';
import store from './Redux/store';
import LoginPage from './pages/LoginPage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

const DrawerScreenOptions = () => {

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return options = {
    drawerType: isLargeScreen ? 'permanent' : 'back',
    drawerStyle: isLargeScreen ? { width: '20%', backgroundColor: "#DADADA" } : { width: '50%', backgroundColor: "#DADADA" },
    overlayColor: 'transparent',
    headerShown: false ,
    headerStyle: { backgroundColor: 'white' },
    headerTitleStyle: { color: "white" },
  }
}

function DrawerNavigation({navigation}) {  

  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} onPress={() => navigation.navigate("LoginPage")}/>} >
        <Drawer.Screen name="Main Page" component={MainPage} options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      </Drawer.Navigator>
 
  );
}

const Main = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LoginPage" component={LoginPage}></Stack.Screen> 
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={DrawerScreenOptions()}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>)
}

const AppProvider = () => {
  return(
    <Provider store={store}>
      <Main></Main>
    </Provider>
  )
}


export default AppProvider;


