import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class HeroImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/pic1.jpg')} style={styles.hero}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    hero: {
        height:300,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
})


