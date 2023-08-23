import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import {accentColor, light_blue} from "../Components/Colors"
const JobsCard = React.memo(({ items , onPress}) => {
  let category = '';
  try {
    category = items.categories[0].name;
  } catch (error) {
    category = items.categories.name;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{items.name}</Text>
      <View
        style={{
          flexWrap:"wrap",
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.company}>{items.company.name || null}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={{flex:1,justifyContent:"flex-end", marginTop:RFPercentage(1)}}>
        <Text style={styles.date}>{items.publication_date}</Text>
      </View>
    </TouchableOpacity>
  );
});
export default JobsCard

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal:RFPercentage(1),
    margin:RFPercentage(1),
    backgroundColor:"#DADADA", 
    padding:RFPercentage(1), 
    borderRadius:RFPercentage(1),
    elevation: 10,
    shadowOffset: {
      width: 5, // Yatay gölge konumu
      height: 5, // Dikey gölge konumu
    },
    shadowOpacity: 0.8, // Gölge opaklığı (0'dan 1'e kadar bir değer olmalı)
    shadowRadius: 7, // Gölgelenme boyutu (blur-radius gibi)
  }, 
  title: {
    fontSize:RFPercentage(2.5),
    marginBottom:RFPercentage(1)
  },
  company:{
    fontWeight:"900",
    fontSize:RFPercentage(2.5),
  },
  category:{
    fontSize:RFPercentage(1.75),
    alignSelf:"center"
  }, 
})