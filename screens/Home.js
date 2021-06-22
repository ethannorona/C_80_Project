import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>
        <View style = {styles.titleBar}>
          <Image source={require('../assets/main-icon.png')} style={{width:180, height:180}}/>
          <Text style = {styles.titleText}>Stellar App</Text>
        </View>
        <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("SpaceCrafts")}>
          <Text style={styles.routeText}>Space Crafts</Text>
          <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("StarMap")}>
          <Text style={styles.routeText}>Star Map</Text>
          <Image source={require('../assets/star_map.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("DailyPic")}>
          <Text style={styles.routeText}>Daily Pictures</Text>
         <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
      flex: 1
  },
  droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
  },
  routeCard: {
      flex: 0,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      borderRadius: 40,
      backgroundColor: 'white'
  },
  titleBar: {
      flex: 0.85,
      justifyContent: "center",
      alignItems: "center"
  },
  titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white"
  },
  routeText: {
      fontSize: 35,
      fontWeight: "bold",
      color: "violet",
      marginTop: 40,
      paddingLeft: 30
  },
  iconImage: {
      position: "absolute",
      height: 60,
      width: 60,
      resizeMode: "contain",
      right: 0,
      top: 0
  }
})