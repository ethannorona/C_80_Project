import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';

export default class SpaceCraftsScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      aircrafts: {}
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () =>{
    axios.get("https://ll.thespacedevs.com/2.2.0/config/spacecraft/")
      .then(response => {
        this.setState({
          aircrafts: response.data.results
        });
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  keyExtractor = (item, index) =>index.toString();

  renderItem = ({item}) =>{
    return(
      <View style = {{borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10, elevation: 10}}>
        <Image 
          source = {{uri: item.agency.image_url}} 
          style = {{width: "100%", height: 200, marginTop: 15, marginBottom: 15, marginRight: 10}}>
        </Image>
        <Text style = {{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
        <Text style = {{color: '#696969'}}>{item.agency.name}</Text>
        <Text>DESCRIPTION</Text>
        <Text style = {{color: '#A9A9A9', marginLeft: 10, marginRight: 10}}>{item.agency.description}</Text>
      </View>
    );
  }
  
  render(){
     if(Object.keys(this.state.aircrafts).length === 0){
      return(
        <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Loading...</Text>
        </View>
      );
    }
    else{
      return(
        <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View style = {{flex: 0.25}}>
            <Text style = {{alignItems: 'center', justifyContent: 'center', marginTop: 80}}>Space Crafts</Text>
          </View>
          <View style = {{flex: 0.75}}>
            <FlatList
              keyExtractor = {this.keyExtractor}
              data = {this.state.aircrafts}
              renderItem = {this.renderItem}
            />
          </View>
        </View>
      );
    }
  }
}