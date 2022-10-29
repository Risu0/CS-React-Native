import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder='Search here..'
        placeholderTextColor="#818181"
        style={styles.searchBar}
      />
      {value ? (
        <AntDesign
          name='close'
          size={20}
          color={colors.PRIMARY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0,
    borderColor: 'red',
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
    color: '#B7B7B7',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 100,
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default SearchBar;
