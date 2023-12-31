import { FlatList ,useWindowDimensions, SafeAreaView, View} from 'react-native'
import React from 'react'

import JobsDetail from './JobsDetail';
import useFetch from '../Hooks/useFetch';
import JobsCard from '../Components/JobsCard';
import CustomHeader from '../Components/CustomHeader';

URL = "https://www.themuse.com/api/public/jobs"

const Jobs = ({navigation}) => {
  
  const {data, renderFooter, handleLoadMore} = useFetch(URL)
  function renderData({item}) {return (<JobsCard items={item} onPress={() => navigation.navigate("JobDetail", {id:item.id})}></JobsCard>)}
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  try {return (
    <View>
      <FlatList
        ListHeaderComponent={<SafeAreaView />}
        data={data}
        showsHorizontalScrollIndicator={true} 
        numColumns={isLargeScreen ? 2 : 1}
        renderItem={renderData}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}>  
      </FlatList>
      </View>
  )} catch (error) {
    console.log(error)
  }
}


export default Jobs