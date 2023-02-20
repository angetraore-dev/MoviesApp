import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

class Item extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {film} = this.props

        return(
            <View style={styles.global_container}>
                <Image style={styles.image} source={film.poster_path}/>

                <View style={styles.sub_container}>

                    <View style={styles.header_container}>
                        <Text style={styles.title}>
                            {film.title}
                        </Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                    </View>

                    <View style={styles.sub_container_2}>

                        <Text style={styles.description} numberOfLines={6}>{film.overview}</Text>
                        <Text style={styles.sortie}>sorti le: {film.release_date}</Text>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    global_container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 170,
        marginBottom: 3
    },
    image:{
        width: 160,
        height: 170,
        marginRight:2,
        backgroundColor: 'lightgrey'
    },
    sub_container:{
        flexDirection:'column',
        flex:1,
    },
    header_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:2
    },
    title:{
        flex:1,
        fontSize:25,
        fontStyle:'italic',
        fontWeight: 'normal'
    },
    vote:{
        fontSize:20,
        fontWeight: 'bold'
    },
    sub_container_2:{
      flex:1,
      flexDirection:'column',
        padding:2
    },
    description:{
        //flexDirection:'row',
        flex:1,
        flexDirection:'row',
        borderColor: 'yellow',
        fontSize: 17
    },
    sortie:{
        textAlign:'right',
        fontSize:17,
        //alignSelf:'flex-end'

    }
})
export default Item