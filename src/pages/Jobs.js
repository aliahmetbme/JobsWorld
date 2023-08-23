import { View, Text, Button, FlatList ,useWindowDimensions, SafeAreaView} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import JobsDetail from './JobsDetail';

import { backgroundColor, accentColor } from '../Components/Colors';
import useFetch from '../Hooks/useFetch';
import JobsCard from '../Components/JobsCard';

URL = "https://www.themuse.com/api/public/jobs"
const Stack = createNativeStackNavigator()

const Jobs = ({navigation}) => {
  
  const {data, renderFooter, handleLoadMore} = useFetch(URL)
  function renderData({item}) {return (<JobsCard items={item} onPress={() => navigation.navigate("JobDetail", {id:item.id})}></JobsCard>)}
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  try {return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={true} 
        numColumns={isLargeScreen ? 2 : 1}
        renderItem={renderData}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}>  
      </FlatList>
    </SafeAreaView>
  )} catch (error) {
    console.log(error)
  }
}

const Navigation = () => {
  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Jobs' component={Jobs}></Stack.Screen>  
        <Stack.Screen name='JobDetail' component={JobsDetail}></Stack.Screen>
      </Stack.Navigator>
    )
}

export default Navigation