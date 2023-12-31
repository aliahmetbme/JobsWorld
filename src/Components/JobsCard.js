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

  const converPublicationDate = (date) => {
    // Tarih dizesini Date nesnesine çevirme
    const dateObject = new Date(date);
    // Tarihi istediğiniz formatında elde etme
    const formattedDate = `${dateObject.getDate()}.${dateObject.getMonth() + 1}.${dateObject.getFullYear()}`;
    return formattedDate
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
        <Text style={styles.date}>{converPublicationDate(items.publication_date)}</Text>
      </View>
    </TouchableOpacity>
  );
});
export default JobsCard

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal:RFPercentage(1),
    margin:RFPercentage(1.5),
    backgroundColor:"#DADADA", 
    padding:RFPercentage(1.5), 
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
    fontSize:RFPercentage(2),
    marginBottom:RFPercentage(2),
    fontWeight:"700"
  },
  company:{
    fontWeight:"500",
    fontSize:RFPercentage(2),
  },
  category:{
    fontSize:RFPercentage(1.5),
    alignSelf:"center"
  }, 
})