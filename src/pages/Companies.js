import { StyleSheet, FlatList, View , Text} from 'react-native'
import React from 'react'
import useFetch from '../Hooks/useFetch'
import CompaniesCard from '../Components/CompaniesCard'

const URL = "https://www.themuse.com/api/public/companies"

const Companies = () => {
  const {data, renderFooter, handleLoadMore} = useFetch(URL)
  console.log(data, "companies")
  
  function renderData({item}) { return (
    <CompaniesCard items={item} ></CompaniesCard>
  );}
  
 return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <FlatList
        data={data}
        renderItem={renderData}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}>
      </FlatList>
    </View>
  )
}

export default Companies

const styles = StyleSheet.create({})