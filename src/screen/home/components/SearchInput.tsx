import  React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

function SearchInput(): React.JSX.Element{
    const [search, onChangeSeach] = useState('');

    return(
        <TextInput
        style={styleSearch.input}
        value={search}
        onChangeText={onChangeSeach}
        placeholder={'Buscar'}
        />
    )
}

export default SearchInput;

const styleSearch = StyleSheet.create({
    input:{
        width:'100%',
        height:36,
        backgroundColor:'#F2F2F2',
        marginTop:8,
        marginBottom:8,
        borderColor: '#B6B6B6',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:16
    }
});