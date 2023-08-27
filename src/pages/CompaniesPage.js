import { StyleSheet, FlatList, View , Text, SafeAreaView} from 'react-native'
import React from 'react'
import useFetch from '../Hooks/useFetch'
import CompaniesCard from '../Components/CompaniesCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const URL = "https://www.themuse.com/api/public/companies"
const Stack = createNativeStackNavigator()


const CompaniesPage = ({navigation}) => {
  const {data, renderFooter, handleLoadMore} = useFetch(URL)
  
  function renderData({item}) {
     return (
    <CompaniesCard onPress={() => navigation.navigate("CompaniesDetails",{
      id: item.id
    })
  } items={item} ></CompaniesCard>
  );}
  
 return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <FlatList
        ListHeaderComponent={<SafeAreaView />}
        data={data}
        renderItem={renderData}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}>
      </FlatList>
    </View>
  )
}


export default CompaniesPage

const styles = StyleSheet.create({})