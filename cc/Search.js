import React from "react";
import {StyleSheet, TextInput, View, Button, FlatList, SafeAreaView, Text} from 'react-native';
import Item from "./Item";
import data from "../Helpers/filmData";

class Search extends React.Component{
    render() {
        return(
            <SafeAreaView style={styles.container_style}>
                <View style={styles.input_view}>
                    <TextInput
                        style={styles.input_style}
                        placeholder={'Titre du film'}
                        onChange={() => {}}
                    />

                    <Button title={'rechercher'} onPress={() => {}}/>
                </View>

                <FlatList
                    data={data}
                    renderItem={
                        ({item}) =>
                            <Item film={item} />
                    }
                    keyExtractor={item => item.id.toString()}
                />


            </SafeAreaView>
        )
    }
}

//Styles
const styles = StyleSheet.create({
    //Conteneur parent VIEW
    container_style: {
        flex: 1,
        //backgroundColor: 'rgba(211,217,215,0.91)'
    },
    //La vue qui contient le component INPUT_TEXT
    input_view:{
        flexDirection: 'row',
        height: 50,
        //marginTop: 50
    },

    //Style du Component INPUT
    input_style: {
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1,
        height: 50,
        paddingLeft: 5,
        marginLeft: 2,
        marginRight: 2,
        flex: 2
    },

    //
    item:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    name:{
        fontSize: 32
    }
})

//Exporter le Component
export default Search
