import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.image} source={require('../images/pic7.png')} />
                <Text style={styles.title}>
                    Lco shopping
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height:80,
        width:Dimensions.get('window').width,
        marginTop:20,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        borderBottomWidth:4,
        borderColor:'#ccc'
    },
    image:{
        width:70,
        height:70,
        marginTop:20,
    },
    title:{
        marginTop:20,
        marginLeft:10,
        color:'#ccc',
        fontWeight:'bold',
        fontSize:17,
        fontStyle:'italic',
    },
})
