import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmt }) => {
    return (
        <View style={styles.searchBackground}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search Here..."
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmt}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    searchBackground: {
        padding: 10,
        marginTop: 15,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        marginHorizontal: 15,
        borderRadius: 50, 
        marginBottom: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 14,
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 15,
    }

});

export default SearchBar;