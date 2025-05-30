import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class FeedingYourBaby extends React.Component{
    render(){
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
            >
                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Slide1.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{  width: Dimensions.get('window').width, height: Dimensions.get('window').height-75  }}
                        resizeMode="contain"
                        source={require('../assets/slide2.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Slide3.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Slide4.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Slide5.png')} />
                </View>

                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Slide6.png')} />
                </View>
                
                <View style={styles.container}>
                    <Image 
                        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-75 }}
                        resizeMode="contain"
                        source={require('../assets/Slide7.png')} />
                </View>

            </ScrollView>
        );
    }
}
export default FeedingYourBaby;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#f2dac8" //peach
    }
});
