import React, { Component } from 'react';
import {Text, View, ImageBackground, SafeAreaView, StyleSheet, StatusBar, Platform, Image, Touchable, Alert, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StarMapScreen extends React.Component{
  
  constructor(props){
    super(props);

    this.state={
      longitude: {},
      latitude: {}
    }
  }
  
  render(){

    const { longitude, latitude } = this.state;
    const path = 'https://virtualsky.lco.global/embed/index.html?longitude=' + this.state.longitude + '&latitude=' + this.state.latitude + '&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'

    return(
      <View style = {{flex: 1}}>
        <WebView 
          scalesPageToFit = {true}
          source = {{uri: path}}  
          style = {{marginTop: 20, marginBottom: 20}}
        />
        <TextInput 
          style = {{height: 80, borderColor: 'gray', borderWidth: 1}}
          placeholder = "Enter your latitude"
          placeholderTextColor = "#ffff#000000"
          onChangeText = {(text)=>{
            this.setState({
              latitude: text
            })
          }}
        />
        <TextInput 
          style = {{height: 80, borderColor: 'gray', borderWidth: 1}}
          placeholder = "Enter your longitude"
          placeholderTextColor = "#ffff#000000"
          onChangeText = {(text)=>{
            this.setState({
              longitude: text
            })
          }}
        />
      </View>
    );
  }
}