import React,{useState, useEffect} from 'react';
import { FlatList, StyleSheet,Image, Text, View } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result,setResult]= useState(null);


  const id = navigation.getParam('id');

  const getResult= async(id)=>{
    const response =await yelp.get(`/${id}`);
    setResult(response.data);
  };

useEffect(()=>{
  getResult(id);
},[])


if(!result){
  return null;
}

  console.log(id);
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
      data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={( {item} ) =>{
          return <Image style={styles.image} source={{uri:item}} />
        }}
        />

    </View>
  );
}

const styles = StyleSheet.create({
image:{
  height:150,
  width:'95%',
  borderRadius:5,
  margin:10,
  padding:15
}

});

export default ResultsShowScreen;