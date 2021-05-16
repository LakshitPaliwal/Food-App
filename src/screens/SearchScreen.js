import React, { useState } from 'react';
import { StyleSheet, Text,ScrollView, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const filterResultByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  const searchApi = async (seachTerm) => {
    console.log('hiii theree')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: seachTerm,
          location: 'san jose '
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };
  // console.log(results);  
  return (
    <View style={{flex:1}}>
      <Text>Search Home Screen</Text>

      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmt={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      {/* <Text>We have found : {results.length}</Text> */}
      <ScrollView>
        <ResultsList results={filterResultByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default SearchScreen;