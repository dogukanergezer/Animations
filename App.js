import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import Windmill from './src/components/Windmill';
import Motor from './src/components/Motor';
import FlowersAndWay from './src/components/FlowersAndWay';


export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
         <Windmill
         style={{left:180,top:78}}
         />
           <Windmill
         style={{left:-65,top:70}}
         />
          <Motor
          style={{top:300}}/>
         <FlowersAndWay/>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30,
    backgroundColor:'#94BBA9'
  }

})
