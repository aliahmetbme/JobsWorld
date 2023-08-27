import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import useLandScape from '../Hooks/useLanspcape';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { green } from "../Components/Colors"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useBottomNavigatorVisible from '../Hooks/useBottomNavigatorVisible';
import CustomHeader from '../Components/CustomHeader';
import { useSelector } from 'react-redux';
import JobsPage from "./JobsPage"
import JobsDetail from './JobsDetail';
import CompaniesPage from "./CompaniesPage"
import CompaniesDetails from './CompaniesDetails';

const Pages =  ['CompaniesDetails', 'JobDetail']

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function MainPage({navigation}) {

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
            iconName = focused ? "search-outline" : "search-circle-outline";
            size = landScape ? (focused ? RFPercentage(4.75) : RFPercentage(3.5)) : (focused ? RFPercentage(5) : RFPercentage(3))
            color = focused ? "white" : "gray";
          } else if (route.name === "Companies") {
            iconName = focused ? "storefront" : "storefront-outline";
            size = landScape ? (focused ? RFPercentage(4.75) : RFPercentage(3.5)) : (focused ? RFPercentage(5) : RFPercentage(3))
            color = focused ? "white" : "gray";
          }

          return <TabBarIcon color={color} size={size} iconName={iconName} />;
        },
        tabBarStyle: {
          height: RFPercentage(landScape ? 8 : 10),
          backgroundColor: green
        },
        headerShown: false,
        tabBarLabelStyle: {
          color: "white",
          marginTop: 0,
          fontSize: RFPercentage(1.85),
          paddingHorizontal: RFPercentage(1),
        },
        tabBarShowLabel: !landScape
      })}
    >
      <Tab.Screen name="Jobs" component={JobNavigation}/>
      <Tab.Screen name="Companies" component={CompanyNavigation} />
    </Tab.Navigator>
  );
}

const JobNavigation = ({navigation , route}) => {
  const { landScape } = useLandScape();

  useBottomNavigatorVisible(
    { Pages:Pages, Style : {height: RFPercentage(landScape ? 8 : 10),
      backgroundColor: green} },
    { route, navigation },
  );
  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='JobsPage' component={JobsPage}></Stack.Screen>  
        <Stack.Screen name='JobDetail' component={JobsDetail} options={{headerShown:true,
         header: props => (
          <CustomHeader
            {...props}
            leftIconName="backspace"
            color=""
            title=" "
            leftFunction={() => navigation.navigate("JobsPage")}
          />), navigationBarHidden:true, tabBarShowLabel:false}} ></Stack.Screen>
      </Stack.Navigator>
    )
} 


const CompanyNavigation = ({navigation, route}) => {
  const ImageSource = useSelector(state => state.GeneralResponse.URL_SOURCE);

  const { landScape } = useLandScape();

  useBottomNavigatorVisible(
    { Pages:Pages, Style : {height: RFPercentage(landScape ? 8 : 10),
      backgroundColor: green} },
    { route, navigation },
  );

  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='CompaniesPage' component={CompaniesPage}></Stack.Screen>  
        <Stack.Screen name='CompaniesDetails' component={CompaniesDetails} options={{headerShown:true, header: props => (
              <CustomHeader
                {...props}
                ImageSource={ImageSource}
                leftIconName="backspace"
                color=""
                title=""
                leftFunction={() => navigation.navigate("CompaniesPage")}
              />), navigationBarHidden:true}} ></Stack.Screen>
      </Stack.Navigator>
    )
} 
export default MainPage