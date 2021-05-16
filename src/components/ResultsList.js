import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length){
    return null;
  }

  
  return (
    <View style={styles.container} >
      <Text style={styles.title}>{title}</Text>
      {/* <Text style={styles.result}>Results: {results.length}</Text> */}

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id:item.id})}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 8

  },
  // result: {
  //   marginLeft: 15

  // }

});

export default withNavigation(ResultsList);